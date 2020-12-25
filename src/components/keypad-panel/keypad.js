import React from "react";

import styles from "./keypad.module.css";

export const keys = [
  { display: "1", value: "1" },
  { display: "2", value: "2" },
  { display: "3", value: "3" },
  { display: "4", value: "4" },
  { display: "5", value: "5" },
  { display: "6", value: "6" },
  { display: "7", value: "7" },
  { display: "8", value: "8" },
  { display: "9", value: "9" },
  { display: "<", value: "undo" },
  { display: "0", value: "0" },
  { display: "clear", value: "clear" },
];

const Keypad = ({ keyPressed }) => {
  return (
    <div className={styles.wrapper}>
      {keys.map(({ display, value }) => (value !== 'undo' ? 
        <div
          onClick={() => keyPressed(value)}
          className={styles.button}
          key={`key-${value}`}
        >
          {display}
        </div>
      : <span key={`key-${value}`} />))}
    </div>
  );
};

export default Keypad;
