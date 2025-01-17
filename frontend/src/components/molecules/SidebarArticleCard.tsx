import React from "react";

// next
import Link from "next/link";

// props
export type SidebarArticleCardProps = {
  id: string;
  link: string;
  category: string;
  date: string;
  title: string;
};

const SidebarArticleCard = ({
  id,
  link,
  category,
  date,
  title,
}: SidebarArticleCardProps) => {
  return (
    <Link
      className="block w-full h-auto py-4 border-b border-gray-300 sm:py-3 sm:mb-2"
      key={id}
      href={link}
    >
      <div className="w-full flex justify-between mb-3">
        <p className="bg-red-600 text-white px-2 py-1.5 rounded-xl text-xs font-medium">
          {category}
        </p>
        <p className="block font-medium text-sm text-gray-500">{date}</p>
      </div>
      <h3 className="block w-full text-sm font-medium text-gray-800 mb-2 line-clamp-2 transition-all duration-300 group-hover:text-gray-400 sm:text-base sm:break-words sm:mb-3">
        {title}
      </h3>
    </Link>
  );
};

export default SidebarArticleCard;
