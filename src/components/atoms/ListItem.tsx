import React from "react";

// next
import Link from "next/link";

// scss
import styles from "./styles/ListItem.module.scss";

// props
export type ListItemProps = {
  id: string;
  text: string;
  href: string;
};

const ListItem = ({ id, text, href }: ListItemProps) => {
  return (
    <div className={styles.listItemBox} key={id}>
      <Link href={href} className={styles.link}>
        <span className={styles.linkText}>{text}</span>
      </Link>
    </div>
  );
};

export default ListItem;
