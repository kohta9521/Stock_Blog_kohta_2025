import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/ArticleCard.module.scss";

// props
export type ArticleCardProps = {
  id: string;
  link: string;
  title: string;
  desc: string;
};

const ArticleCard = ({ id, link, title, desc }: ArticleCardProps) => {
  return (
    <Link key={id} className={styles.card} href={link}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{desc}</p>
    </Link>
  );
};

export default ArticleCard;
