import React from "react";

// next
import Link from "next/link";

// clsx
import clsx from "clsx";

// props
export type HeaderBoxListProps = {
  id: string;
  link: string;
  icon: React.ReactNode;
  text: string;
  size?: "small" | "medium" | "large";
};

const HeaderBoxList = ({
  id,
  link,
  icon,
  text,
  size = "medium",
}: HeaderBoxListProps) => {
  return (
    <Link
      key={id}
      href={link}
      className={clsx(
        "flex text-center items-center bg-red-500 rounded-2xl cursor-pointer group transition-colors duration-300 hover:bg-red-400",
        {
          "p-2": size === "small",
          "p-4": size === "medium",
          "p-6": size === "large",
        }
      )}
    >
      {icon}
      <p
        className={clsx(
          {
            "text-sm": size === "small",
            "text-base": size === "medium",
            "text-lg": size === "large",
          },
          "relative font-semibold leading-10 cursor-pointer ml-2 text-white"
        )}
      >
        {text}
      </p>
    </Link>
  );
};

export default HeaderBoxList;
