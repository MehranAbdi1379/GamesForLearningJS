import React from "react";
import styles from "./GameFrield.module.css";
import Break from "../Break/Break";
import BreakGroup from "../BreakGroup/BreakGroup";

const GameField = () => {
  return (
    <div className={styles.GameField} id="GameField">
      <BreakGroup></BreakGroup>
    </div>
  );
};

export default GameField;
