import React from "react";
import styles from "./StartButton.module.css";

interface Props {
  onClick: () => void;
}

const StartButton = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.StartButton}>
      Start Game!!!
    </button>
  );
};

export default StartButton;
