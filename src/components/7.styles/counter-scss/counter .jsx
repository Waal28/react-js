import React, { useState } from "react";
import styles from "./index.module.css";
import { joinClass } from "./join";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    const counter = count + 1;
    if (counter > 999) {
      return;
    }
    setCount(counter);
  };
  const handleDecrement = () => {
    const counter = count + 1;
    if (counter > 999) {
      return;
    }
    setCount(counter);
  };
  const parseCounter = (counter) => {
    if (counter < 10) {
      return `00${counter}`;
    }
    if (counter < 100) {
      return `0${counter}`;
    }
    return counter;
  };
  return (
    <div className={styles.container}>
      {parseCounter(count)
        .split(" ")
        .map((digit, index) => (
          <div className={styles.digitContainer} key={index}>
            <div className={styles.digit}>{digit}</div>
          </div>
        ))}
      <div className={styles.container}>
        <div className={styles.btnGroupContainer}>
          <div className={styles.btnContainer}>
            <button
              className={joinClass([styles.btn, styles.btnIncrement])}
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <div className={styles.btnContainer}>
            <button
              className={joinClass([styles.btn, styles.btnDecrement])}
              onClick={handleDecrement}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
