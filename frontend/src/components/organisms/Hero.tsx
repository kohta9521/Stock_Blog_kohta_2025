import React from "react";
import TopArticleCard from "../molecules/TopArticleCard";

// components

const Hero = () => {
  return (
    <div className="relative w-full h-64 bg-red-600">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-black pt-14 mb-3 sm:text-4xl">
          Kohta <span className="text-white">Stack</span> Blog
        </h1>
        <p className="text-white text-sm font-semibold sm:text-base sm:font-bold mb-[25px]">
          Kohtaの日々の投資関連の勉強を記録する
          <br className="sm:hidden" />
          株式・金融・税金など幅広い情報を勉強中
        </p>
      </div>
      {/* top contents */}
      <div className="absolute inset-x-0  flex justify-center">
        <div className="w-10/12 max-w-[90%]">
          <TopArticleCard
            id="home-top-article"
            link="/"
            image="/images/common/sample-article.jpeg"
            genre="株式投資"
            date="2021/08/01"
            title="株価が上がる理由とロジックとは？"
            tags={["株式", "投資", "株価"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
