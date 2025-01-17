import React from "react";

// next
import Link from "next/link";

// clsx
import clsx from "clsx";

// props
export type HeaderListProps = {
  id: string;
  link: string;
  text: string;
  size?: "small" | "medium" | "large";
};

const HeaderList = ({ id, link, text, size = "medium" }: HeaderListProps) => {
  return (
    <Link key={id} href={link} className="block group">
      <p
        className={clsx(
          {
            "text-sm": size === "small",
            "text-base": size === "medium",
            "text-lg": size === "large",
          },
          "relative font-semibold leading-10 cursor-pointer mr-10"
        )}
      >
        {text}
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
      </p>
    </Link>
  );
};

export default HeaderList;
