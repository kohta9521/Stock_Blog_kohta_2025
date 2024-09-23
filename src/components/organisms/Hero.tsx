import React from "react";

// styles
import styles from "./styles/Hero.module.scss";

// components

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Sample Title Here</h1>
      </div>
    </div>
  );
};

export default Hero;
