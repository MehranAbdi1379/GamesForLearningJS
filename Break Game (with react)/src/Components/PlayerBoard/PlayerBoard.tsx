import React, { KeyboardEventHandler } from "react";
import styles from "./PlayerBoard.module.css";

interface Props {
  handleKeyDown: (event: any) => void;
}

const PlayerBoard = ({ handleKeyDown }: Props) => {
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
