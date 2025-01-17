import React from "react";

// components

const Hero = () => {
  return (
    <div className="w-full h-64 bg-red-600">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-black pt-14 mb-3 sm:text-4xl">
          Kohta <span className="text-white">Stack</span> Blog
        </h1>
        <p className="text-white text-sm font-semibold sm:text-base sm:font-bold">
          Kohtaの日々の投資関連の勉強を記録する
          <br className="sm:hidden" />
          株式・金融・税金など幅広い情報を勉強中
        </p>
      </div>
      {/* top contents */}
      <div className=""></div>
    </div>
  );
};

export default Hero;
