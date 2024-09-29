import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/Logo.module.scss";

// props
export type LogoProps = {
  id: string;
  link?: string;
  size?: "small" | "medium" | "large";
};

const Logo = ({ id, link = "/", size = "medium" }: LogoProps) => {
  return (
    <Link key={id} href={link} className={styles.logoLink}>
      <p className={styles.logoText}>Kohta Blog</p>
    </Link>
  );
};

export default Logo;
