import React from "react";

// scss
import styles from "./styles/DefaultFlexLayout.module.scss";

// components

// props
export type DefaultFlexLayoutProps = {
  id: string;
  leftChildren: React.ReactNode;
  rightChildren: React.ReactNode;
};

const DefaultFlexLayout = ({
  id,
  leftChildren,
  rightChildren,
}: DefaultFlexLayoutProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>{leftChildren}</div>
      <div className={styles.right}>{rightChildren}</div>
    </div>
  );
};

export default DefaultFlexLayout;