import React from "react";

// props
export type SidebarTitleProps = {
  id: string;
  title: string;
};

const SidebarTitle = ({ id, title }: SidebarTitleProps) => {
  return (
    <p key={id} className="block w-full mb-5 font-semibold text-lg text-black">
      {title}
    </p>
  );
};

export default SidebarTitle;
