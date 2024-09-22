import React from "react";

// scss
import styles from "./styles/Footer.module.scss";

// components

// icons
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        {/* main text */}
        <div className={styles.leftBox}></div>
        {/* sns */}
        <div className={styles.rightBox}>
          <div className={styles.snsBox}>
            <SlSocialGithub className={styles.icon} />
            <SlSocialTwitter className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
