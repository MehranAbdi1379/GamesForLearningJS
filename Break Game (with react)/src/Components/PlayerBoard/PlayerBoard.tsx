import React, { KeyboardEventHandler } from "react";
import styles from "./PlayerBoard.module.css";

const PlayerBoard = () => {
  const elem = document.getElementById("PlayerBoard");
  let elemMarginLeft = 300;
  function handleKeyDown(event: any) {
    if (event.key === "ArrowRight" && elemMarginLeft < 590) {
      elemMarginLeft += 10;
      if (elem) elem.style.marginLeft = elemMarginLeft + "px";
    }
    if (event.key === "ArrowLeft" && elemMarginLeft > 10) {
      elemMarginLeft -= 10;
      if (elem) elem.style.marginLeft = elemMarginLeft + "px";
    }
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
