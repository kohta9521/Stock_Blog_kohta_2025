"use client";
import React from "react";

// hooks
import { useGetBlogById } from "@/hooks/useGetBlogById";

// components
import TopArticleCard from "../molecules/TopArticleCard";
import Loading from "../atoms/Loading";

const Hero = () => {
  const { blog, error } = useGetBlogById("loy3m7mm2");
  if (error) {
    return <p>Error: {error}</p>;
  }
  if (!blog) {
    return <Loading />;
  }
  return (
    <div className="relative w-full h-72 bg-red-600 sm:h-64">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-black pt-14 mb-3 sm:text-6xl">
          Kohta <span className="text-white">Stack</span> Blog
        </h1>
        <p className="text-white text-sm font-semibold sm:text-base sm:font-bold mb-[25px]">
          Kohtaの日々の投資関連の勉強を記録する
          <br className="sm:hidden" />
          株式・金融・税金など幅広い情報を勉強中
        </p>
      </div>
      {/* top contents */}
      <div className="absolute inset-x-0 flex justify-center">
        <div className="w-11/12 max-w-[90%]">
          <p className="block w-full  text-white font-semibold mb-2 sm:hidden">
            - おすすめ記事 -
          </p>
          <TopArticleCard
            id={blog.id}
            link={`/articles/${blog.id}`}
            imageInsideTag="Pickup"
            image={blog.image.url}
            genre={blog.category.name}
            date={blog.date}
            title={blog.title}
            tags={["株式", "投資", "株価"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
