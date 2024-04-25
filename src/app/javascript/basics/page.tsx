"use client";
import React from "react";
import styles from "./page.module.scss";
import Layout from "./../layout/page";
import Step from "./../blocks/step/page";
import Scrollbar from "./../../blocks/custom-scrollbar/page";

const page = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1>JavaScript Basics</h1>
          <div className={styles.divider}></div>
        </div>
        <div className={styles.content}>
          <Scrollbar className={styles.customScrollbar}>
            <div className={styles.block}>
              <div className={styles.stepper}>
                <Step
                  data={{
                    title: "Variables",
                    description:
                      "The basics of declaring and assigning values to variables",
                  }}
                />
                <Step
                  data={{
                    title: "Booleans",
                    description:
                      "Learn how to code with binary data using JavaScript Booleans",
                  }}
                />
                <Step
                  data={{
                    title: "Operators",
                    description:
                      "Learn how to calculate with JavaScript values or how to compare them using operators",
                  }}
                />
                <Step
                  data={{
                    title: "String",
                    description:
                      "These exercises will teach you how to declare and manipulate string variables and how to combine multiple strings into one.",
                  }}
                />
                <Step
                  data={{
                    title: "Conditionals",
                    description:
                      "These JavaScript exercises will teach you how to use conditionals, such as if and else. They help you control the flow of your programs and make decisions based on the data they receive.",
                  }}
                />
                <Step
                  data={{
                    title: "Functions",
                    description:
                      "This series of JavaScript exercises provides an introduction to the fundamental concepts and syntax of functions. You will learn how to define, call, and pass arguments to functions.",
                  }}
                />
                <Step
                  data={{
                    title: "Arrays",
                    description:
                      "The basics of working with arrays in JavaScript, including creating, accessing, and modifying arrays and their elements.",
                  }}
                />
                <Step
                  data={{
                    title: "Objects",
                    description:
                      "The basics of working with objects in JavaScript. You will learn how to access object properties, how to create and modify objects.",
                  }}
                />
                <Step
                  data={{
                    title: "Loops",
                    description:
                      "This series of JavaScript exercises covers the basics of using loops in JavaScript, including for and while loops, as well as how to control the flow of a loop with break and continue statements.",
                  }}
                />
                <Step
                  data={{
                    title: "Scope",
                    description:
                      "Learn about scopes in JavaScript. Topics include function scope, block scope, global scope, and scope hierarchy.",
                  }}
                />
                <Step
                  data={{
                    title: "Asynchronous JS",
                    description:
                      "Learn how to use asynchronous operations to move time-consuming tasks to the background and continue with the main process until they have finished.",
                  }}
                />
              </div>
            </div>
          </Scrollbar>
        </div>
      </div>
    </Layout>
  );
};

export default page;
