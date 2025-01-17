import React from "react";

// props
export type SidebarTitleProps = {
  id: string;
  title: string;
};

const SidebarTitle = ({ id, title }: SidebarTitleProps) => {
  return (
    <p
      key={id}
      className="block w-full mb-3 mt-14 font-semibold text-lg text-black sm:mt-10"
    >
      {title}
    </p>
  );
};

export default SidebarTitle;
