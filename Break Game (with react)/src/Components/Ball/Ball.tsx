import React, { useState } from "react";
import styles from "./Ball.module.css";

interface Props {
  gameStarted: boolean;
}

const Ball = ({ gameStarted }: Props) => {
  /*const [ballMovingUp, setBallMovingUp] = useState(true);
  const [ballMovingRight, setBallMovingRight] = useState(true);
  const [ballMarginLeft, setBallMarginLeft] = useState(400);
  const [ballMarginTop, setBallMarginTop] = useState(170);*/
  let ballMovingUp = true;
  let ballMovingRight = true;
  let ballMarginLeft = 400;
  let ballMarginTop = 170;
  const id = setInterval(MoveBall, 5);
  const ball = document.getElementById("Ball");

  function MoveBall() {
    if (gameStarted) {
      if (
        ballMovingRight == false &&
        ballMovingUp == false &&
        ballMarginLeft >= 15 &&
        ballMarginTop <= 400
      ) {
        ballMarginLeft--;
        ballMarginTop++;
        if (ball) {
          ball.style.marginTop = ballMarginTop + "px";
          ball.style.marginLeft = ballMarginLeft + "px";
        }
        if (ballMarginTop == 400) ballMovingUp = true;
        if (ballMarginLeft == 15) ballMovingRight = true;
      } else if (
        ballMovingRight == true &&
        ballMovingUp == false &&
        ballMarginLeft <= 770 &&
        ballMarginTop <= 400
      ) {
        ballMarginLeft++;
        ballMarginTop++;
        if (ball) {
          ball.style.marginTop = ballMarginTop + "px";
          ball.style.marginLeft = ballMarginLeft + "px";
        }
        if (ballMarginTop == 400) ballMovingUp = true;
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
  return <div className={styles.Ball} id="Ball"></div>;
};

export default Ball;
