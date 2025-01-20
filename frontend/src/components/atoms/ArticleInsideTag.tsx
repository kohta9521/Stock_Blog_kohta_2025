import React from "react";

// clsx
import clsx from "clsx";

// props
export type ArticleInsideTagProps = {
  id: string;
  type: string;
};

const ArticleInsideTag = ({ id, type }: ArticleInsideTagProps) => {
  const typeText =
    type === "Pickup"
      ? "Pickup"
      : type === "New"
      ? "New"
      : type === "Popular"
      ? "Popular"
      : type === "None"
      ? ""
      : "";
  return (
    <div
      key={id}
      className={clsx("absolute top-2 left-2", {
        "bg-yellow-600 text-white px-2 py-1 rounded-xl text-xs font-medium":
          type === "Pickup",
        "bg-blue-600 text-white px-2 py-1 rounded-xl text-xs font-medium":
          type === "New",
        "bg-green-600 text-white px-2 py-1 rounded-xl text-xs font-medium":
          type === "Popular",
        hidden: type === "None",
      })}
    >
      <p
        className={clsx("text-xs", {
          hidden: type === "None",
        })}
      >
        {typeText}
      </p>
    </div>
  );
};

export default ArticleInsideTag;
