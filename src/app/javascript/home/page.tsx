"use client";
import React from "react";
import styles from "./page.module.scss";
import Layout from "./../layout/page";

const page = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>JS Challanger</h1>
        <div className={styles.cardList}>
          <div className={styles.card}>
            <h3>Free Javascript challenges</h3>
            <p>Learn Javascript online by solving coding exercises.</p>
          </div>
          <div className={styles.card}>
            <h3>Javascript for all levels</h3>
            <p>Solve Javascript tasks from beginner to advanced levels.</p>
          </div>
          <div className={styles.card}>
            <h3>Accross various subjects</h3>
            <p>Select your topic of interest and start practicing.</p>
          </div>
        </div>
        <h1 className={styles.heading}>Start your learning path here</h1>
        <div className={styles.button}>
          <button>START</button>
        </div>
      </div>
    </Layout>
  );
};

export default page;
