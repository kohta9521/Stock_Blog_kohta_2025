import React from "react";

// components
import BasicPage from "@/components/templates/BasicPage";
import ArticlePage from "@/components/templates/ArticlePage";

const Articles = () => {
  return (
    <BasicPage
      id="articles"
      linkArr={[{ link: "/articles", text: "ブログ一覧" }]}
      title="ブログ一覧"
      desc="kohtaの提供するブログ記事一覧です。"
    >
      {/* 一覧テンプレを作成 */}
      <ArticlePage id="article-page">
        <h1>halle</h1>
      </ArticlePage>
    </BasicPage>
  );
};

export default Articles;
