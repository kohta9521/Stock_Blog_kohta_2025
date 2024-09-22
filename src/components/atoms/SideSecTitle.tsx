import React, { useState } from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/SideSecTitle.module.scss";

// props
export type SideSecTitleProps = {
  id: string;
  text: string;
  link: string;
  onClick: (id: string) => void;
  isSelected?: boolean;
};

const SideSecTitle = ({
  id,
  text,
  link,
  onClick,
  isSelected = false,
}: SideSecTitleProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    onClick(id);
  };
  return (
    <Link
      className={`${styles.box} ${isSelected ? styles.selected : ""}`}
      key={id}
      href={link}
    >
      <p className={styles.text}>{text}</p>
    </Link>
  );
};

export default SideSecTitle;
