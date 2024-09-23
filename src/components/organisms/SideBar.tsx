import React from "react";

// scss
import styles from "./styles/SideBar.module.scss";

// components

// props
export type SideBarProps = {
  id: string;
  children: React.ReactNode;
};

const SideBar = ({ children }: SideBarProps) => {
  return <div className={styles.sidebar}>{children}</div>;
};

export default SideBar;