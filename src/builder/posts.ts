import fs from "fs-extra";
import Parser from "rss-parser";
import { members } from "../../members";
import { PostItem, Member } from "../types";

type FeedItem = {
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
  dateMiliSeconds: number;
};

function isValidUrl(str: string): boolean {
  try {
    const { protocol } = new URL(str);
    return protocol === "http:" || protocol === "https:";
  } catch {
    return false;
  }
}

// 添加自定义 User-Agent 头解决 403 问题
const parser = new Parser({
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
  }
});

let allPostItems: PostItem[] = [];

async function fetchFeedItems(url: string) {
  try {
    const feed = await parser.parseURL(url);
    if (!feed?.items?.length) return [];

    // return item which has title and link
    return feed.items
      .map(({ title, contentSnippet, link, isoDate }) => {
        return {
          title,
          contentSnippet: contentSnippet?.replace(/\n/g, ""),
          link,
          isoDate,
          dateMiliSeconds: isoDate ? new Date(isoDate).getTime() : 0,
        };
      })
      .filter(
        ({ title, link }) => title && link && isValidUrl(link)
      ) as FeedItem[];
  } catch (error) {
    // 捕获并记录错误，但不中断流程
    console.error(`[ERROR] Failed to fetch RSS feed: ${url}`);
    console.error(error.message);
    return []; // 返回空数组保证后续流程继续
  }
}

async function getFeedItemsFromSources(sources: undefined | string[]) {
  if (!sources?.length) return [];
  
  let feedItems: FeedItem[] = [];
  for (const url of sources) {
    try {
      const items = await fetchFeedItems(url);
      if (items) feedItems = [...feedItems, ...items];
    } catch (error) {
      // 双层错误捕获确保健壮性
      console.error(`[WARN] Skipped source: ${url}`);
    }
  }
  return feedItems;
}

async function getMemberFeedItems(member: Member): Promise<PostItem[]> {
  const { id, sources, name, includeUrlRegex, excludeUrlRegex } = member;
  const feedItems = await getFeedItemsFromSources(sources);
  if (!feedItems) return [];

  let postItems = feedItems.map((item) => {
    return {
      ...item,
      authorName: name,
      authorId: id,
    };
  });
  
  if (includeUrlRegex) {
    postItems = postItems.filter((item) => {
      return item.link.match(new RegExp(includeUrlRegex));
    });
  }
  
  if (excludeUrlRegex) {
    postItems = postItems.filter((item) => {
      return !item.link.match(new RegExp(excludeUrlRegex));
    });
  }

  return postItems;
}

(async function () {
  // 添加超时机制防止卡死
  const TIMEOUT = 30 * 1000; // 30秒超时
  const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => reject(new Error("Build timeout exceeded")), TIMEOUT)
  );

  try {
    await Promise.race([
      (async () => {
        for (const member of members) {
          const items = await getMemberFeedItems(member);
          if (items) allPostItems = [...allPostItems, ...items];
        }
      })(),
      timeoutPromise
    ]);

    allPostItems.sort((a, b) => b.dateMiliSeconds - a.dateMiliSeconds);
    fs.ensureDirSync(".contents");
    fs.writeJsonSync(".contents/posts.json", allPostItems);
    console.log("✅ Successfully generated posts.json");
  } catch (error) {
    console.error("❌ Critical build error:", error.message);
    // 确保即使出错也写入已有数据
    if (allPostItems.length > 0) {
      fs.ensureDirSync(".contents");
      fs.writeJsonSync(".contents/posts.json", allPostItems);
      console.log("⚠️ Partial data saved despite error");
    }
    process.exit(1); // 非零退出码标记构建失败
  }
})();