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
      <div className="w-full h-auto sm:flex sm:flex-wrap sm:justify-between sm:gap-1 sm:mb-10">
        {children}
      </div>
    </div>
  );
};

export default ArticlePage;
