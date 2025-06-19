import { NextPage } from "next";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { LinkBackHome } from "@src/components/LinkBackHome";
import { PageSEO } from "@src/components/PageSEO";

const Page: NextPage = () => {
  return (
    <>
      <PageSEO title="About" path="/about" />
      <ContentWrapper>
      <section className="about">
  <div className="about__header">
    <h1 className="about__title">About</h1>
  </div>
  
  <div className="about__body">
    <p className="about__intro">
      本仓库属于 Dgut Hacktb 实验室创建的博客聚合平台，欢迎实验室成员参与建设
      <a href="https://hacktb.com" className="about__link">Hacktb Team Blog Hub</a>
    </p>
    
    <div className="about__meta">
      <div className="about__maintainer">
        <span className="about__meta-label">当前维护者：</span>
        <span className="about__highlight">L1nKGr</span>
      </div>
      
      <div className="about__repo">
        <span className="about__meta-label">项目仓库：</span>
        <a href="https://github.com/00ye/team-blog-hub" className="about__link">
          https://github.com/00ye/team-blog-hub
        </a>
        <span className="about__join">欢迎合并加入</span>
      </div>
    </div>
    
    <div className="about__members">
      <h3 className="about__subtitle">合并成员例子，提交到members.ts</h3>
      <pre className="about__code-block">
        <code>
{`{
  id: "L1nKGr",
  name: "L1nKGr",
  role: "Researcher",
  bio: "深呼吸的时候，就能保持沉稳",
  avatarSrc: "/avatars/l1nkGr.png",
  sources: ["https://blog.000k.de/rss"]
}`}
        </code>
      </pre>
    </div>
  </div>
</section>

      </ContentWrapper>
    </>
  );
};

export default Page;
