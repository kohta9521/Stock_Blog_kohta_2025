import React from "react";

// next
import Link from "next/link";

// props
export type TagItemProps = {
  id: string;
  link: string;
  text: string;
};

const TagItem = ({ id, link, text }: TagItemProps) => {
  return (
    <Link
      key={id}
      className="block w-auto px-3 py-1 border border-gray-600 rounded-full group duration-300 transition-all hover:border-red-500  hover:text-red-500 transition-all duration-300"
      href={link}
    >
      <p className="text-center text-sm text-gray-600 group-hover:text-red-500 duration-300 transition-all">
        # {text}
      </p>
    </Link>
  );
};

export default TagItem;
