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
      <h3 className="about__subtitle">合并成员信息</h3>
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
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.about__header {
  border-bottom: 1px solid #eee;
  margin-bottom: 1.5rem;
}

.about__title {
  color: #2c3e50;
  font-size: 2rem;
}

.about__intro {
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.about__meta {
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.about__meta-label {
  font-weight: 600;
  color: #555;
}

.about__highlight {
  color: #e74c3c;
  font-weight: 600;
}

.about__link {
  color: #3498db;
  text-decoration: none;
  margin: 0 0.3rem;
}

.about__link:hover {
  text-decoration: underline;
}

.about__join {
  display: inline-block;
  margin-left: 10px;
  padding: 2px 8px;
  background: #e8f4fc;
  border-radius: 4px;
  color: #2980b9;
}

.about__subtitle {
  color: #34495e;
  margin: 1.2rem 0 0.8rem;
}

.about__code-block {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 0.9rem;
}
      </ContentWrapper>
    </>
  );
};

export default Page;
