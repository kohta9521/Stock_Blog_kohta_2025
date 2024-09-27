import React from "react";

// scss
import styles from "./styles/SideBar.module.scss";

// components
import SideBarSecBox from "../molecules/SideBarSecBox";
import SideSecTitle from "../atoms/SideSecTitle";
import SideSecLink from "../atoms/SideSecLink";
import SideBarTop from "../molecules/SideBarTop";

// props
export type SideBarProps = {
  id: string;
};

const SideBar = ({ id }: SideBarProps) => {
  return (
    <div className={styles.sidebar}>
      <SideBarTop />
      {/* 概要 */}
      <SideBarSecBox id="about">
        <SideSecTitle
          id="home"
          text="HOME"
          link="/"
          onClick={() => {}}
          isSelected={true}
        />
        <SideSecLink
          id="aboutThisSite"
          href="/about"
          text="このサイトについて"
          changePage={false}
        />
        <SideSecLink
          id="thisSiteTechAndStack"
          href="/site"
          text="サイトの構成と技術スタック"
          changePage={false}
        />
        <SideSecLink
          id="myServices"
          href="/service"
          text="提供しているサービス一覧"
          changePage={false}
        />
        <SideSecLink
          id="myPortFolioSite"
          href="/portfolio"
          text="ポートフォリオサイト"
          changePage={true}
        />
        <SideSecLink
          id="myOldTechBlog"
          href="/oldBlog"
          text="旧ブログサイト"
          changePage={true}
        />
      </SideBarSecBox>
      {/* 技術関連 */}
      <SideBarSecBox id="tech">
        <SideSecTitle
          id="myTechStack"
          text="Technology"
          link="/mytechstack"
          onClick={() => {}}
          isSelected={true}
        />
        <SideSecLink
          id="htmlcss"
          href="/htmlcss"
          text="HTML & CSS"
          changePage={false}
        />
        <SideSecLink
          id="tailwindcss"
          href="/tailwindcss"
          text="TailwindCSS"
          changePage={false}
        />
        <SideSecLink
          id="javascript"
          href="/javascript"
          text="JavaScript"
          changePage={false}
        />
        <SideSecLink
          id="typescript"
          href="/typescirpt"
          text="TypeScript"
          changePage={false}
        />
        <SideSecLink id="react" href="/react" text="React" changePage={false} />
        <SideSecLink
          id="nextjs"
          href="/nextjs"
          text="Next.js"
          changePage={false}
        />
        <SideSecLink
          id="eslintprettier"
          href="/eslintprettier"
          text="ESLint & Prettier"
          changePage={false}
        />
        <SideSecLink
          id="jest"
          href="/test"
          text="Test (Jest)"
          changePage={false}
        />
        <SideSecLink
          id="graphql"
          href="/graphql"
          text="GraphQL"
          changePage={false}
        />
        <SideSecLink id="go" href="/go" text="Go" changePage={false} />
        <SideSecLink id="aws" href="/aws" text="AWS" changePage={false} />
      </SideBarSecBox>
      {/* 株式投資 */}
      <SideBarSecBox id="stock">
        <SideSecTitle
          id="stock"
          text="株式投資関連"
          link="/"
          onClick={() => {}}
          isSelected={true}
        />
        <SideSecLink
          id="stocklesson"
          href="/stocklesson"
          text="株式投資入門"
          changePage={false}
        />
        <SideSecLink
          id="technical"
          href="/technical"
          text="テクニカル分析"
          changePage={false}
        />
        <SideSecLink
          id="fundamental"
          href="/fundamental"
          text="ファンダメンタル分析"
          changePage={false}
        />
        <SideSecLink
          id="companyanalysis"
          href="/companyanalisis"
          text="会社分析"
          changePage={false}
        />
      </SideBarSecBox>
      {/* 書籍 */}
      <SideBarSecBox id="book">
        <SideSecTitle
          id="book"
          text="書籍"
          link="/"
          onClick={() => {}}
          isSelected={true}
        />
        <SideSecLink
          id="allbooks"
          href="/allbooks"
          text="書籍一覧"
          changePage={false}
        />
        <SideSecLink
          id="recommendbooks"
          href="/recommendbooks"
          text="おすすめ書籍"
          changePage={true}
        />
        <SideSecLink
          id="techbooks"
          href="/techbooks"
          text="技術関連"
          changePage={true}
        />
        <SideSecLink
          id="stockbooks"
          href="/stockbooks"
          text="株式投資関連"
          changePage={true}
        />
        <SideSecLink
          id="otherbooks"
          href="/otherbooks"
          text="その他"
          changePage={true}
        />
      </SideBarSecBox>
      {/* sample */}
      <SideBarSecBox id="sample2">
        <SideSecTitle
          id="build"
          text="Git Hub"
          link="/"
          onClick={() => {}}
          isSelected={true}
        />
        <SideSecLink
          id={"aboutpagelink"}
          href="/about"
          text="Amplify hosting"
          changePage={false}
        />
        <SideSecLink
          id={"aboutpagelink"}
          href="/about"
          text="deployment"
          changePage={true}
        />
        <SideSecLink
          id={"aboutpagelink"}
          href="/about"
          text="Custom configuration"
          changePage={true}
        />
        <SideSecLink
          id={"aboutpagelink"}
          href="/about"
          text="Custom configuration"
          changePage={true}
        />
        <SideSecLink
          id={"aboutpagelink"}
          href="/about"
          text="Custom configuration"
          changePage={true}
        />
      </SideBarSecBox>
    </div>
  );
};

export default SideBar;
