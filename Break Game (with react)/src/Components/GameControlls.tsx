import React, { useEffect, useRef, useState } from "react";
import GameField from "./GameField/GameField";
import Lives from "./Lives/Lives";

const GameControlls = () => {
  const [active, setActive] = useState<boolean[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  function onStartGameClick() {
    setGameStarted(true);
    const PlayerBoard = document.getElementById("PlayerBoard");
    PlayerBoard?.focus();

    const id = setInterval(focusOnPlayer, 1000);
    function focusOnPlayer() {
      PlayerBoard?.focus();
    }

    let activeList: boolean[] = [];
    for (let i = 0; i < 10; i++) {
      activeList.push(true);
    }

    if (gameStarted == false) {
      setActive(activeList);
    }
  }

  const PlayerBoard = document.getElementById("PlayerBoard");
  const [playerBoardMarginLeft, setPlayerBoardMarginLeft] = useState(300);
  let playerBoardMarginLefttemp = playerBoardMarginLeft;
  function handleKeyDown(event: any) {
    if (event.key === "ArrowRight" && playerBoardMarginLefttemp < 590) {
      playerBoardMarginLefttemp += 10;
      if (PlayerBoard)
        PlayerBoard.style.marginLeft = playerBoardMarginLefttemp + "px";
    }
    if (event.key === "ArrowLeft" && playerBoardMarginLefttemp > 10) {
      playerBoardMarginLefttemp -= 10;
      if (PlayerBoard)
        PlayerBoard.style.marginLeft = playerBoardMarginLefttemp + "px";
    }
  }

  useEffect(() => {
    const interval = setInterval(MoveBall, 5);
    return () => clearInterval(interval);
  });

  const [lives, setLives] = useState(3);

  let ballMovingUp = true;
  let ballMovingRight = true;
  let ballMarginLeft = 400;
  let ballMarginTop = 170;
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
          ballMarginLeft > playerBoardMarginLefttemp &&
          ballMarginLeft < playerBoardMarginLefttemp + 200
        ) {
          ballMovingUp = true;
        } else if (ballMarginTop == 360) {
          setLives(lives - 1);
          if (lives == 1) {
            alert("Game Over!!!");
            setGameStarted(false);
            setLives(3);
          }
          setPlayerBoardMarginLeft(playerBoardMarginLefttemp);
          ballMarginLeft = 400;
          ballMarginTop = 170;
          ballMovingUp = true;
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
          ballMarginLeft > playerBoardMarginLefttemp &&
          ballMarginLeft < playerBoardMarginLefttemp + 200
        ) {
          ballMovingUp = true;
        } else if (ballMarginTop == 360) {
          setLives(lives - 1);
          if (lives == 1) {
            alert("Game Over!!!");
            setGameStarted(false);
            setLives(3);
          }
          setPlayerBoardMarginLeft(playerBoardMarginLefttemp);
          ballMarginLeft = 400;
          ballMarginTop = 170;
          ballMovingUp = true;
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
    <div>
      <Lives Lives={lives}></Lives>
      <GameField
        active={active}
        handleKeyDown={handleKeyDown}
        gameStarted={gameStarted}
        onStartGameClick={onStartGameClick}
      ></GameField>
    </div>
  );
};

export default GameControlls;
