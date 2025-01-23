"use client";
import React from "react";

// hooks
import useGetAllBlogs from "@/hooks/useGetAllBlogs";

// components
import BasicPage from "@/components/templates/BasicPage";
import ArticlePage from "@/components/templates/ArticlePage";
import ArticleCard from "@/components/molecules/ArticleCard";

const Articles = () => {
  // ブログ一覧を取得
  const blogs = useGetAllBlogs();

  return (
    <BasicPage
      id="articles"
      linkArr={[{ link: "/articles", text: "ブログ一覧" }]}
      title="ブログ一覧"
      desc="kohtaの提供するブログ記事一覧です。キーワード検索・日付絞り込み検索などが可能です。"
    >
      {/* 一覧テンプレを作成 */}
      <ArticlePage id="article-page">
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
      </ArticlePage>
    </BasicPage>
  );
};

export default Articles;
