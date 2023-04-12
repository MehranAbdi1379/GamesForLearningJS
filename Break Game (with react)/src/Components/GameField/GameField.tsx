import React, { useState } from "react";
import styles from "./GameFrield.module.css";
import Break from "../Break/Break";
import BreakGroup from "../BreakGroup/BreakGroup";
import PlayerBoard from "../PlayerBoard/PlayerBoard";
import Ball from "../Ball/Ball";
import StartButton from "../StartButton/StartButton";

const GameField = () => {
  const [gameStarted, setGameStarted] = useState(false);
  function onStartGameClick() {
    setGameStarted(true);
    const elem = document.getElementById("PlayerBoard");
    elem?.focus();

    const id = setInterval(focusOnPlayer, 1000);
    function focusOnPlayer() {
      elem?.focus();
    }
  }
  return (
    <div className={styles.GameField} id="GameField">
      {gameStarted == false && (
        <StartButton onClick={onStartGameClick}></StartButton>
      )}
      <BreakGroup></BreakGroup>
      <Ball></Ball>
      <PlayerBoard></PlayerBoard>
    </div>
  );
};

export default GameField;
