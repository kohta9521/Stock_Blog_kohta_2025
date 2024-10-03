import React from "react";

// scss
import styles from "./styles/Header.module.scss";

// components
import Logo from "../atoms/Logo";
import HeaderBoxButton from "../atoms/HeaderBoxButton";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Logo id="homeHeaderLogo" link="/" size="medium" />
        <HeaderBoxButton id="homeHeaderContactButton" link="/" text="Contact" />
      </div>
    </div>
  );
};

export default Header;
