import React, { useState } from "react";
import Keypad from "./keypad";

import styles from "./panel.module.css";

const KeyInput = ({ value }) => {
  const stars = [...Array(value.length)].map(() => "*").join("");
  return (
    <div className={styles.input}>
      <div>{stars}</div>
    </div>
  );
};

const Panel = ({}) => {
  const [key, setKey] = useState("");
  const keyPressed = (value) => {
    switch (value) {
      case "clear":
        setKey("");
        break;

      case "undo":
        setKey(key.slice(0, -1));
        break;
      default:
        setKey(key + value);
        break;
    }
  };
  return (
    <div className={styles.wrapper}>
      <KeyInput value={key} />
      <Keypad keyPressed={(e) => keyPressed(e)} />
    </div>
  );
};

export default Panel;
