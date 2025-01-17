import React from "react";

// next
import Link from "next/link";

// clsx
import clsx from "clsx";

// props
export type LogoProps = {
  id: string;
  link: string;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary";
};

const Logo = ({ id, link, size = "medium", color = "primary" }: LogoProps) => {
  return (
    <Link key={id} href={link} className="">
      <p
        className={clsx(
          {
            "text-sm": size === "small",
            "text-base": size === "medium",
            "text-lg": size === "large",
          },
          {
            "text-primary": color === "primary",
            "text-secondary": color === "secondary",
          },
          "font-semibold leading-10 cursor-pointer"
        )}
      >
        Kohta
        <span className="text-red-600"> Stock </span>
        Blog
      </p>
    </Link>
  );
};

export default Logo;
