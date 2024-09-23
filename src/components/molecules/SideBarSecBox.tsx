import React from "react";

// scss
import styles from "./styles/SideBarSecBox.module.scss";

// props
export type SideBarSecBoxProps = {
  id: string;
  children: React.ReactNode;
};

const SideBarSecBox = ({ id, children }: SideBarSecBoxProps) => {
  return (
    <div className={styles.box} key={id}>
      {children}
    </div>
  );
};

export default SideBarSecBox;
