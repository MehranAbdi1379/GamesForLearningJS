import React, { useState } from "react";
import styles from "./GameFrield.module.css";
import Break from "../Break/Break";
import BreakGroup from "../BreakGroup/BreakGroup";
import PlayerBoard from "../PlayerBoard/PlayerBoard";
import Ball from "../Ball/Ball";
import StartButton from "../StartButton/StartButton";

interface Props {
  gameStarted: boolean;
  onStartGameClick: () => void;
  handleKeyDown: (event: any) => void;
}

const GameField = ({ gameStarted, onStartGameClick, handleKeyDown }: Props) => {
  return (
    <div className={styles.GameField} id="GameField">
      {gameStarted == false && (
        <StartButton onClick={onStartGameClick}></StartButton>
      )}
      <BreakGroup></BreakGroup>
      <Ball gameStarted={gameStarted}></Ball>
      <PlayerBoard handleKeyDown={handleKeyDown}></PlayerBoard>
    </div>
  );
};

export default GameField;
