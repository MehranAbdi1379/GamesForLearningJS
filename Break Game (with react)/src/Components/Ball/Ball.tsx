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

  return <div className={styles.Ball} id="Ball"></div>;
};

export default Ball;
