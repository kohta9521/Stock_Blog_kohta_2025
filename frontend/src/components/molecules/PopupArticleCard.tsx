import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// utils
import { formatDate } from "@/utils/formatDate";

// props
export type PopupArticleCardProps = {
  id: string;
  link: string;
  title: string;
  image: string;
  category: string;
  date: string;
};

const PopupArticleCard = ({
  id,
  link,
  title,
  image,
  category,
  date,
}: PopupArticleCardProps) => {
  return (
    <Link
      className="block w-full h-auto py-2 mb-3 group duration-300 transition-all hover:bg-gray-100"
      key={id}
      href={link}
    >
      <div className="w-full flex items-center justify-between">
        <Image
          className="block w-4/12 h-full"
          src={image}
          width={300}
          height={100}
          alt={title}
        />
        <div className="w-7/12 text-left ">
          <h3 className="text-base font-semibold mb-14">{title}</h3>
          <div className="flex justify-between items-center">
            <p className="bg-red-600 text-white px-2 py-1.5 rounded-xl text-xs font-semibold">
              {category}
            </p>
            <p className="font-semibold text-s">{formatDate(date)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PopupArticleCard;
