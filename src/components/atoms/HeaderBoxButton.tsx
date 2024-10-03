import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/HeaderBoxButton.module.scss";

// icons
import { IoCall } from "react-icons/io5";

// props
export type HeaderBoxButtonProps = {
  id: string;
  link: string;
  text: string;
};

const HeaderBoxButton = ({ id, link, text }: HeaderBoxButtonProps) => {
  return (
    <Link className={styles.box} key={id} href={link}>
      <IoCall className={styles.icon} />
      <p className={styles.text}>{text}</p>
    </Link>
  );
};

export default HeaderBoxButton;
