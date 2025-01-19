import React from "react";

// next
import Link from "next/link";

// clsx
import clsx from "clsx";

// props
export type FooterListProps = {
  id: string;
  link: string;
  text: string;
  size?: "primary" | "secondary";
};

const FooterList = ({ id, link, text, size = "primary" }: FooterListProps) => {
  return (
    <Link
      key={id}
      href={link}
      className={clsx("block", {
        "mb-2 mt-4": size === "primary",
        "mb-1": size === "secondary",
      })}
    >
      <p
        className={clsx("block", {
          "text-red-500 text-base font-semibold": size === "primary",
          "text-gray-500 text-sm": size === "secondary",
        })}
      >
        {text}
      </p>
    </Link>
  );
};

export default FooterList;
