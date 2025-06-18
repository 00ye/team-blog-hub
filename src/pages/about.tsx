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
          <h1 className="about__title">About</h1>
          <div className="about__body">
            <p>
            本仓库属于Dgut hacktb实验室创建的博客聚合平台，欢迎实验室成员参与进来
              <a href="https://hacktb.com">
              hacktb Team Blog Hub
              </a>
              <br/>
              <a>目前负责维护本仓库:l1nkGr,</a>
              <br/>
              <a>项目仓库:https://github.com/00ye/team-blog-hub,欢迎合并加入</a>
            </p>
          </div>
          
        </section>
      </ContentWrapper>
    </>
  );
};

export default Page;
