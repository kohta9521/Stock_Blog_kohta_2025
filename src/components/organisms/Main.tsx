import React from "react";

// scss
import styles from "./styles/Main.module.scss";

// components

// props
export type MainProps = {
  id: string;
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Main;
