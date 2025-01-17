import React from "react";

// next
import Link from "next/link";

// props
export type CategoryItemProps = {
  id: string;
  link: string;
  text: string;
  number: string;
};

const CategoryItem = ({ id, link, text, number }: CategoryItemProps) => {
  return (
    <Link className="block w-full mb-2 group" key={id} href={link}>
      <p className="group-hover:text-red-500 text-sm font-medium">
        {text} ({number})
      </p>
    </Link>
  );
};

export default CategoryItem;
