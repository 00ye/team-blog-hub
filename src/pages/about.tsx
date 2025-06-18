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
              このサイトはチームのためのブログスターター
              <a href="https://hacktb.com">
              hacktb Team Blog Hub
              </a>
              のデモです。ブログのRSSのURLを登録することで、チームメンバーの投稿を一覧にまとめて表示します。
            </p>
          </div>
          
        </section>
      </ContentWrapper>
    </>
  );
};

export default Page;
