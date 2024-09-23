import React from "react";

// scss
import styles from "./styles/Main.module.scss";

// components

// props
export type MainProps = {
  id: string;
  children: React.ReactNode;
};

const Main = ({ id, children }: MainProps) => {
  return (
    <div className={styles.main} key={id}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Main;
