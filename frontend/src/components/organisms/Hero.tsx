import React from "react";

// styles
import styles from "./styles/Hero.module.scss";

// components

// props
export type HeroProps = {
  children: React.ReactNode;
};

const Hero = ({ children }: HeroProps) => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.topBlogBox}>{children}</div>
      </div>
    </div>
  );
};

export default Hero;
