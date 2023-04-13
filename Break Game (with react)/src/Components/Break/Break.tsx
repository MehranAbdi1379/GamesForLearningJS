import React from "react";
import styles from "./Break.module.css";

interface Props {
  id: string;
  active: boolean;
}

const Break = ({ id, active }: Props) => {
  return (
    <>
      {active && <div className={styles.BreakActive} id={id}></div>}
      {active == false && <div className={styles.BreakDeactive} id={id}></div>}
    </>
  );
};

export default Break;
