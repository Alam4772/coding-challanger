import React from "react";
import styles from "./page.module.scss";

const page = ({ data }: any) => {
  const { title, description } = data;
  return (
    <div className={styles.step}>
      <div className={styles.block}>
        <div className={styles.round}>
          <span>0/11</span>
        </div>
        <div className={styles.para}>
          <h3>{title}</h3>
          <p className={styles.desc}>{description}</p>
        </div>
      </div>
      <div>
        <div className={styles.line}>
          <span></span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default page;
