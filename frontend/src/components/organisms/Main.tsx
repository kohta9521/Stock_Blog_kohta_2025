import React from "react";

// next
import Link from "next/link";

// components
import SidebarTitle from "../atoms/SidebarTitle";
import ArticleCard from "../molecules/ArticleCard";

const Main = () => {
  return (
    <div className="w-11/12 mx-auto mt-72 sm:mt-40 sm:flex sm:justify-between sm:max-w-screen-2xl">
      {/* Article Area */}
      <div className=" bg-yellow-200 w-full mb-8 sm:w-9/12  sm:pb-10">
        <div className="w-full mb-10  sm:w-full sm:flex sm:flex-wrap sm:justify-between sm:gap-2 sm:mb-10">
          <ArticleCard
            id="home-article-1"
            link="/"
            image="/images/common/sample-article.jpeg"
            category="株式投資"
            date="2021/08/01"
            title="株価が上がる理由とロジックとは？"
            tags={["株式", "投資", "株価"]}
          />
          <ArticleCard
            id="home-article-1"
            link="/"
            image="/images/common/sample-article.jpeg"
            category="株式投資"
            date="2021/08/01"
            title="株価が上がる理由とロジックとは？"
            tags={["株式", "投資", "株価"]}
          />
          <ArticleCard
            id="home-article-1"
            link="/"
            image="/images/common/sample-article.jpeg"
            category="株式投資"
            date="2021.08.01"
            title="株価が上がる理由とロジックとは？"
            tags={["株式", "投資", "株価"]}
          />
          <ArticleCard
            id="home-article-1"
            link="/"
            image="/images/common/sample-article.jpeg"
            category="株式投資"
            date="2021/08/01"
            title="株価が上がる理由とロジックとは？"
            tags={["株式", "投資", "株価"]}
          />
        </div>
        <Link
          className="block text-center w-64 h-16 mx-auto py-3 bg-red-600 rounded-full group transition-all duration-300 hover:bg-red-400"
          href="/articles"
        >
          <p className="text-white font-semibold text-xl leading-10">
            記事一覧
          </p>
        </Link>
      </div>
      {/* Sidebar Area */}
      <div className="bg-blue-300 w-full sm:w-1/5">
        <SidebarTitle id="category" title="カテゴリー" />
        <SidebarTitle id="tag" title="タグ" />
        <SidebarTitle id="popularArticles" title="人気の記事" />
      </div>
    </div>
  );
};

export default Main;
