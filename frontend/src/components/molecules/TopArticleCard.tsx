import React from "react";

// next
import Image from "next/image";
import Link from "next/link";

// utils
import { formatDate } from "@/utils/formatDate";

// components
import ArticleInsideTag from "../atoms/ArticleInsideTag";

// props
export type TopArticleCardProps = {
  id: string;
  link: string;
  imageInsideTag: "Pickup" | "New" | "Popular" | "None";
  image: string;
  genre: string;
  date: string;
  title: string;
  tags: string[];
};

const TopArticleCard = ({
  id,
  link,
  imageInsideTag,
  image,
  genre,
  date,
  title,
  tags,
}: TopArticleCardProps) => {
  return (
    <Link
      key={id}
      href={link}
      className="block relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white rounded-lg sm:flex sm:max-w-screen-2xl sm:mx-auto"
    >
      <ArticleInsideTag id={title} type={imageInsideTag} />
      <Image
        src={image}
        width={400}
        height={200}
        alt="top-article"
        className="w-full h-52 object-cover "
      />

      {/* Content */}
      <div className="w-full p-4 sm:pt-6 sm:pl-8 sm:pr-4 sm:pb-4">
        <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
          <p className="bg-red-600 text-white px-2 py-1.5 rounded-xl text-xs font-semibold">
            {genre}
          </p>
          <p className="font-semibold text-s">{formatDate(date)}</p>
        </div>
        <h2 className="block w-full text-lg font-semibold text-gray-800 mb-3 line-clamp-2 truncate overflow-hidden sm:mb-16">
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

export default TopArticleCard;
