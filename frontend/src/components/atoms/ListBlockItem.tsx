import React from "react";

// next
import Link from "next/link";

// style
import styles from "./styles/ListBlockItem.module.scss";

// icons
import { IoIosMail } from "react-icons/io";

// props
export type ListBlockItemProps = {
  id: string;
  text: string;
  href: string;
};

export const ListBlockItem = ({ id, text, href }: ListBlockItemProps) => {
  return (
    <div className={styles.listItem} key={id}>
      <Link className={styles.link} href={href}>
        <IoIosMail className={styles.icon} />
        <p className={styles.text}>{text}</p>
      </Link>
    </div>
  );
};

export default ListBlockItem;
