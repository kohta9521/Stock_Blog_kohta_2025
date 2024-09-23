import React from "react";

// next
import Link from "next/link";

// style
import styles from "./styles/SideSecLink.module.scss";

// icons
import { MdArrowForwardIos } from "react-icons/md";
import { RiExternalLinkLine } from "react-icons/ri";

// props
export type SideSecLinkProps = {
  id: string;
  href: string;
  text: string;
  changePage: boolean;
};

const SideSecLink = ({
  id,
  href,
  text,
  changePage = false,
}: SideSecLinkProps) => {
  return (
    <Link key={id} className={styles.link} href={href}>
      <p className={styles.text}>{text}</p>
      {changePage ? (
        <RiExternalLinkLine className={styles.icon} />
      ) : (
        <MdArrowForwardIos className={styles.icon} />
      )}
    </Link>
  );
};

export default SideSecLink;
