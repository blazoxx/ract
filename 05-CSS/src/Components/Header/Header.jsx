import React from "react";
import styles from "./Header.module.css";

const header = () => {
  return (
    <div>
      <h1 className={styles.header}>Header</h1>
      <button className={styles.btn}>Login</button>
    </div>
  );
};

export default header;
