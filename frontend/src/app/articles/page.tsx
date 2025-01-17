import React from "react";

// components
import BasicPage from "@/components/templates/BasicPage";

const Articles = () => {
  return (
    <BasicPage
      id="articles"
      linkArr={[{ link: "/articles", text: "ブログ一覧" }]}
      title="ブログ一覧"
      desc="kohtaの提供するブログ記事一覧です。"
    >
      {/* 一覧テンプレを作成 */}
      <div>
        <h1>ここに一覧を表示</h1>
        <p>ページネーションを作成する</p>
      </div>
    </BasicPage>
  );
};

export default Articles;
