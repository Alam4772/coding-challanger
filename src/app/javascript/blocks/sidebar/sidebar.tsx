"use client";
import { usePathname } from "next/navigation";
import styles from "./sidebar.module.scss";
import { useEffect } from "react";
import Link from "next/link";

const sidebar = () => {
  const path = usePathname();

  useEffect(() => {}, [path]);

  return (
    <div className={styles.sidebar}>
      <h1 className={styles.heading}>JS Challenger</h1>
      <ul className={styles.menu}>
        <li>
          <Link
            href={"/javascript/home"}
            className={path === "/javascript/home" ? styles.active : ""}
          >
            <i className="fas fa-home"></i>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/javascript/basics"}
            className={path === "/javascript/basics" ? styles.active : ""}
          >
            <i className="fas fa-laptop-code"></i>
            <span>Javascript Basics (0/109)</span>
          </Link>
        </li>
        <li>
          <Link href={"/javascript/basics"}>
            <i className="fas fa-laptop-code"></i>
            <span>Javascript DOM (0/19)</span>
          </Link>
        </li>
        <li>
          <Link href={"/javascript/basics"}>
            <i className="fas fa-laptop-code"></i>
            <span>Javascript Practice (0/80)</span>
          </Link>
        </li>
        <li>
          <Link href={"/javascript/basics"}>
            <i className="fas fa-bolt"></i>
            <span>Challange Rush</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default sidebar;
