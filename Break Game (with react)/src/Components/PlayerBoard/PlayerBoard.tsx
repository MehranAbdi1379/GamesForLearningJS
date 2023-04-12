import React, { KeyboardEventHandler } from "react";
import styles from "./PlayerBoard.module.css";

const PlayerBoard = () => {
  const elem = document.getElementById("PlayerBoard");
  let elemMarginLeft = 300;
  if (elem) {
    elem.style.backgroundColor = "red";
    elem.style.width = "200px";
    elem.style.height = "25px";
    elem.style.borderRadius = "20px";
    elem.style.marginTop = "190px";
    elem.style.marginLeft = "300px";
    elem.style.outline = "none";
    /*
    background-color: red;
    border-radius: 20px;
    margin-top: 190px;
    margin-left: 300px;
    outline: none;*/
  }
  function handleKeyDown(event: any) {
    if (event.key === "ArrowRight" && elemMarginLeft < 590) {
      elemMarginLeft += 10;
      if (elem) elem.style.marginLeft = elemMarginLeft + "px";
    }
    if (event.key === "ArrowLeft" && elemMarginLeft > 10) {
      elemMarginLeft -= 10;
      if (elem) elem.style.marginLeft = elemMarginLeft + "px";
    }
  }
  return (
    <div
      id="PlayerBoard"
      onKeyDown={(e) => handleKeyDown(e)}
      tabIndex={0}
    ></div>
  );
};

export default PlayerBoard;
