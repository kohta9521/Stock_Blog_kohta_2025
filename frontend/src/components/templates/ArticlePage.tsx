import React from "react";

// components
import Search from "../organisms/Search";

// props
export type ArticlePageProps = {
  id: string;
  children: React.ReactNode;
};

const ArticlePage = ({ id, children }: ArticlePageProps) => {
  return (
    <div key={id} className="w-full">
      {/* search */}
      <Search />
      {/* main flex */}
      <div className="w-full sm:flex sm:justify-between">
        <div className="w-full mb-20 sm:w-9/12 bg-red-300  sm:pb-10">
          <div className="w-full mb-10  sm:w-full sm:flex sm:flex-wrap sm:justify-between sm:gap-2 sm:mb-10">
            {children}
          </div>
        </div>
        <div className="w-full mb-20 sm:w-1/4 bg-blue-300 sm:pt-6"></div>
      </div>
    </div>
  );
};

export default ArticlePage;
