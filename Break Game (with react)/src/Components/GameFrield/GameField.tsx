import React from "react";
import styles from "./GameFrield.module.css";
import Break from "../Break/Break";
import BreakGroup from "../BreakGroup/BreakGroup";
import PlayerBoard from "../PlayerBoard/PlayerBoard";
import Ball from "../Ball/Ball";

const GameField = () => {
  return (
    <div className={styles.GameField} id="GameField">
      <BreakGroup></BreakGroup>
      <Ball></Ball>
      <PlayerBoard></PlayerBoard>
    </div>
  );
};

export default GameField;
