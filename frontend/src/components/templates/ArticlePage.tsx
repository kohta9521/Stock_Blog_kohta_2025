import React from "react";

// components

// props
export type ArticlePageProps = {
  id: string;
  children: React.ReactNode;
};

const ArticlePage = ({ id, children }: ArticlePageProps) => {
  return (
    <div key={id} className="block w-11/12 max-auto sm:flex">
      {/* search */}
      <div className="w-full"></div>
      {/* main flex */}
      <div className="w-full sm:flex">
        <div className="">{children}</div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default ArticlePage;
