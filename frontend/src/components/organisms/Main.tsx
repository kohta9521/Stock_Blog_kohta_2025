"use client";
import React from "react";

// next
import Link from "next/link";

// hooks
import useGetAllBlogs from "@/hooks/useGetAllBlogs";

// components
import SidebarTitle from "../atoms/SidebarTitle";
import ArticleCard from "../molecules/ArticleCard";
import SidebarArticleCard from "../molecules/SidebarArticleCard";
import CategoryItem from "../atoms/CategoryItem";
import TagItem from "../atoms/TagItem";

const Main = () => {
  // ブログ一覧を取得
  const blogs = useGetAllBlogs();

  return (
    <div className="w-11/12 mx-auto mt-72 sm:mt-52 sm:flex sm:justify-around sm:max-w-screen-2xl">
      {/* Article Area */}
      <div className="w-full mb-20 sm:w-9/12  sm:pb-10">
        <div className="w-full mb-10  sm:w-full sm:flex sm:flex-wrap sm:justify-between sm:gap-2 sm:mb-10">
          <p className="block w-full max-x-auto text-red-500 font-semibold mb-2 sm:text-lg">
            - 最新記事 -
          </p>
          {blogs.slice(0, 8).map((blog) => (
            <ArticleCard
              key={blog.id}
              id={blog.id}
              link={`/articles/${blog.id}`}
              imageInsideTag={blog.imageInsideTag}
              image={blog.image.url}
              category={blog.category.name}
              date={blog.date}
              title={blog.title}
              tags={blog.tags.map((tag) => tag.sample)}
            />
          ))}
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
      <div className="w-full mb-20 sm:w-1/5 sm:pt-6">
        <SidebarTitle id="category" title="カテゴリー" />
        <CategoryItem id="category-item-1" link="/" text="全て" number="120" />
        <CategoryItem
          id="category-item-2"
          link="/"
          text="株式投資"
          number="120"
        />
        <CategoryItem
          id="category-item-3"
          link="/"
          text="デイトレ"
          number="120"
        />
        <CategoryItem
          id="category-item-4"
          link="/"
          text="チャート"
          number="120"
        />
        <CategoryItem
          id="category-item-5"
          link="/"
          text="テクニカル"
          number="120"
        />
        <CategoryItem
          id="category-item-6"
          link="/"
          text="ファンダメンタル"
          number="120"
        />
        <CategoryItem
          id="category-item-7"
          link="/"
          text="信用取引"
          number="120"
        />
        <SidebarTitle id="tag" title="タグ" />
        <div className="w-full h-auto flex flex-wrap gap-2 ">
          <TagItem id="tag-item-1" link="/" text="株式" />
          <TagItem id="tag-item-2" link="/" text="株主優待" />
          <TagItem id="tag-item-3" link="/" text="投資" />
          <TagItem id="tag-item-4" link="/" text="米国株" />
          <TagItem id="tag-item-5" link="/" text="資産運用" />
          <TagItem id="tag-item-6" link="/" text="日本株" />
          <TagItem id="tag-item-7" link="/" text="インデックス投資" />
          <TagItem id="tag-item-8" link="/" text="デイトレード" />
          <TagItem id="tag-item-9" link="/" text="NISA" />
          <TagItem id="tag-item-10" link="/" text="仮想通貨" />
          <TagItem id="tag-item-11" link="/" text="高配当株" />
          <TagItem id="tag-item-12" link="/" text="IPO" />
          <TagItem id="tag-item-13" link="/" text="株式市場" />
          <TagItem id="tag-item-14" link="/" text="オルカン" />
        </div>
        <SidebarTitle id="popularArticles" title="人気の記事" />
        <SidebarArticleCard
          id="sidebar-article-1"
          link="/"
          category="デイトレード"
          date="2021/08/01"
          title="デイトレードの基本とは？"
        />
        <SidebarArticleCard
          id="sidebar-article-1"
          link="/"
          category="デイトレード"
          date="2021/08/01"
          title="デイトレードの基本とは？"
        />
        <SidebarArticleCard
          id="sidebar-article-1"
          link="/"
          category="デイトレード"
          date="2021/08/01"
          title="デイトレードの基本とは？"
        />
        <SidebarArticleCard
          id="sidebar-article-1"
          link="/"
          category="デイトレード"
          date="2021/08/01"
          title="デイトレードの基本とは？"
        />
        <SidebarArticleCard
          id="sidebar-article-1"
          link="/"
          category="デイトレード"
          date="2021/08/01"
          title="デイトレードの基本とは？"
        />
      </div>
    </div>
  );
};

export default Main;
