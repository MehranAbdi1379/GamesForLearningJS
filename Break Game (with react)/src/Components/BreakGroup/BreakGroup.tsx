import React from "react";
import Break from "../Break/Break";
import styles from "./BreakGroup.module.css";

interface Props {
  active: boolean[];
}

const BreakGroup = ({ active }: Props) => {
  const BreakIds = [];
  for (let i = 1; i < 11; i++) {
    BreakIds[i - 1] = i;
  }
  return (
    <div className={styles.BreakGroup}>
      {BreakIds.map((id) => {
        return (
          <Break
            active={active[id - 1]}
            id={"Break" + id}
            key={"Break" + id}
          ></Break>
        );
      })}
    </div>
  );
};

export default BreakGroup;
