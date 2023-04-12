import React, { useState } from "react";
import GameField from "./GameField/GameField";

const GameControlls = () => {
  const [gameStarted, setGameStarted] = useState(false);
  function onStartGameClick() {
    setGameStarted(true);
    const PlayerBoard = document.getElementById("PlayerBoard");
    PlayerBoard?.focus();

    const id = setInterval(focusOnPlayer, 1000);
    function focusOnPlayer() {
      PlayerBoard?.focus();
    }
  }

  const PlayerBoard = document.getElementById("PlayerBoard");
  let PlayerBoardMarginLeft = 300;
  function handleKeyDown(event: any) {
    if (event.key === "ArrowRight" && PlayerBoardMarginLeft < 590) {
      PlayerBoardMarginLeft += 10;
      if (PlayerBoard)
        PlayerBoard.style.marginLeft = PlayerBoardMarginLeft + "px";
    }
    if (event.key === "ArrowLeft" && PlayerBoardMarginLeft > 10) {
      PlayerBoardMarginLeft -= 10;
      if (PlayerBoard)
        PlayerBoard.style.marginLeft = PlayerBoardMarginLeft + "px";
    }
  }

  let ballMovingUp = true;
  let ballMovingRight = true;
  let ballMarginLeft = 400;
  let ballMarginTop = 170;
  let id = setInterval(MoveBall, 5);
  const ball = document.getElementById("Ball");

  function MoveBall() {
    if (gameStarted) {
      if (
        ballMovingRight == false &&
        ballMovingUp == false &&
        ballMarginLeft >= 15 &&
        ballMarginTop <= 360
      ) {
        ballMarginLeft--;
        ballMarginTop++;
        if (ball) {
          ball.style.marginTop = ballMarginTop + "px";
          ball.style.marginLeft = ballMarginLeft + "px";
        }
        if (
          ballMarginTop == 360 &&
          ballMarginLeft > PlayerBoardMarginLeft &&
          ballMarginLeft < PlayerBoardMarginLeft + 200
        ) {
          ballMovingUp = true;
        } else if (ballMarginTop == 360) {
          //health--
          ballMarginLeft = 400;
          ballMarginTop = 170;
          PlayerBoardMarginLeft = 300;
        }
        if (ballMarginLeft == 15) ballMovingRight = true;
      } else if (
        ballMovingRight == true &&
        ballMovingUp == false &&
        ballMarginLeft <= 770 &&
        ballMarginTop <= 360
      ) {
        ballMarginLeft++;
        ballMarginTop++;
        if (ball) {
          ball.style.marginTop = ballMarginTop + "px";
          ball.style.marginLeft = ballMarginLeft + "px";
        }
        if (
          ballMarginTop == 360 &&
          ballMarginLeft > PlayerBoardMarginLeft &&
          ballMarginLeft < PlayerBoardMarginLeft + 200
        ) {
          ballMovingUp = true;
        } else if (ballMarginTop == 360) {
          //health--
          ballMarginLeft = 400;
          ballMarginTop = 170;
          PlayerBoardMarginLeft = 300;
        }
        if (ballMarginLeft == 770) ballMovingRight = false;
      } else if (
        ballMovingRight == false &&
        ballMovingUp == true &&
        ballMarginLeft >= 15 &&
        ballMarginTop >= 0
      ) {
        ballMarginLeft--;
        ballMarginTop--;
        if (ball) {
          ball.style.marginTop = ballMarginTop + "px";
          ball.style.marginLeft = ballMarginLeft + "px";
        }
        if (ballMarginTop == 0) ballMovingUp = false;
        if (ballMarginLeft == 15) ballMovingRight = true;
      } else if (
        ballMovingRight == true &&
        ballMovingUp == true &&
        ballMarginLeft <= 770 &&
        ballMarginTop >= 0
      ) {
        ballMarginLeft++;
        ballMarginTop--;
        if (ball) {
          ball.style.marginTop = ballMarginTop + "px";
          ball.style.marginLeft = ballMarginLeft + "px";
        }
        if (ballMarginTop == 0) ballMovingUp = false;
        if (ballMarginLeft == 770) ballMovingRight = false;
      }
    }
  }
  return (
    <GameField
      handleKeyDown={handleKeyDown}
      gameStarted={gameStarted}
      onStartGameClick={onStartGameClick}
    ></GameField>
  );
};

export default GameControlls;
