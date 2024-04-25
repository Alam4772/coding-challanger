"use client";
import React from "react";
import styles from "./page.module.scss";
import Sidebar from "../blocks/sidebar/sidebar";

const page = ({ children }: any) => {
  return (
    <div className={styles.page}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default page;
