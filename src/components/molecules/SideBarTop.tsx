import React from "react";

// scss
import styles from "./styles/SideBarTop.module.scss";

// components

const SideBarTop = () => {
  return (
    <div className={styles.box}>
      <h3>Sidebar Genre List</h3>
      <select name="sample">
        04
        <option value="sample">技術関連</option>
        05
        <option value="sample">投資関連</option>
        06
        <option value="sample">サンプル3</option>
        07
        <option value="sample">サンプル4</option>
        08
        <option value="sample">サンプル5</option>
        09
      </select>
    </div>
  );
};

export default SideBarTop;
