"use client";
import React from "react";
import styles from "./page.module.scss";

const page = ({ children, className }: any) => {
  const scrollbarClasses = [styles.scrollbar];
  if (className) {
    scrollbarClasses.push(className);
  }

  return (
    <div className={scrollbarClasses.join(" ")}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default page;
