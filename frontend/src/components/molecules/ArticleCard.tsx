import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// utils
import { formatDate } from "@/utils/formatDate";

// components
import ArticleInsideTag from "../atoms/ArticleInsideTag";

// props
export type ArticleCardProps = {
  id: string;
  link: string;
  // imageInsideTag: "Pickup" | "New" | "Popular" | "None";
  imageInsideTag: string;
  image: string;
  category: string;
  date: string;
  title: string;
  tags: string[];
};

const ArticleCard = ({
  id,
  link,
  imageInsideTag,
  image,
  category,
  date,
  title,
  tags,
}: ArticleCardProps) => {
  return (
    <Link
      key={id}
      href={link}
      className="relative block group w-full mb-4 overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white rounded-lg sm:w-64 sm:max-h-96"
    >
      <ArticleInsideTag id={title} type={imageInsideTag} />
      <Image
        src={image}
        width={500}
        height={350}
        alt="articleImage"
        className="w-full h-52 object-cover sm:h-36"
      />
      {/* Content */}
      <div className="w-full p-4 sm:pt-4 sm:px-4 sm:pb-4 ">
        <div className="flex justify-between items-center mb-3 text-sm text-gray-500 sm:text-sm">
          <p className="bg-red-600 text-white px-2 py-1.5 rounded-xl text-xs font-semibold">
            {category}
          </p>
          <p className="font-semibold text-s">{formatDate(date)}</p>
        </div>
        <h2 className="block w-full text-lg font-semibold text-gray-800 mb-3 line-clamp-2 transition-all duration-300 group-hover:text-gray-400 sm:text-base sm:break-words sm:mb-7">
          {title}
        </h2>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <p
              key={tag}
              className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-medium"
            >
              # {tag}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
