import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// scss
import styles from "./styles/TopBlogCard.module.scss";

// components

// props
export type TopBlogCardProps = {
  id: string;
  href: string;
  img: string;
  title: string;
  desc: string;
  publishDate: string;
  updateDate: string;
  tag: string[];
};

const TopBlogCard = ({
  id,
  href,
  img,
  title,
  desc,
  publishDate,
  updateDate,
  tag,
}: TopBlogCardProps) => {
  return (
    <Link key={id} href={href} className={styles.blog}>
      <Image
        className={styles.blogImage}
        src={img}
        width={1280}
        height={800}
        alt="ブログトップの画像"
      />
      <span className={styles.gradation}></span>
      <div className={styles.blogContents}>
        <h3 className={styles.blogTitle}>{title}</h3>
        <p className={styles.blogDesc}>{desc}</p>
        <div className={styles.flexBox}>
          <div className={styles.leftBox}>
            <div className={styles.publishBox}>
              <p className={styles.publishTitle}>Published on</p>
              <p className={styles.publishText}>{publishDate}</p>
            </div>
            <div className={styles.updateBox}>
              <p className={styles.updateTitle}>Updated on</p>
              <p className={styles.updateText}>{updateDate}</p>
            </div>
          </div>
          <div className={styles.rightBox}>
            {tag.map((tag, index) => {
              return (
                <p key={index} className={styles.tag}>
                  {tag}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopBlogCard;
