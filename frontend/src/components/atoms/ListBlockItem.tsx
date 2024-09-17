import React from "react";

// next
import Link from "next/link";

// style
import styles from "./styles/ListBlockItem.module.scss";

// props
export type ListBlockItemProps = {
  id: string;
  text: string;
  icon: React.ReactNode;
  href: string;
};

export const ListBlockItem = ({ id, text, icon, href }: ListBlockItemProps) => {
  return (
    <div className={styles.listItem} key={id}>
      <Link className={styles.link} href={href}>
        {icon}
        <p className={styles.listText}>{text}</p>
      </Link>
    </div>
  );
};

export default ListBlockItem;
