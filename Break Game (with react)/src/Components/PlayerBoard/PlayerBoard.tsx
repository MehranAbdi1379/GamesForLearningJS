import React, { KeyboardEventHandler } from "react";
import styles from "./PlayerBoard.module.css";

const PlayerBoard = () => {
  function handleKeyDown(event: any) {
    console.log(event.key);
    const elem = document.getElementsByClassName(styles.classcolor)[0]
      .className;
  }
  return (
    <div
      className={styles.PlayerBoard}
      id="PlayerBoard"
      onKeyDown={(e) => handleKeyDown(e)}
      tabIndex={0}
    ></div>
  );
};

export default PlayerBoard;
