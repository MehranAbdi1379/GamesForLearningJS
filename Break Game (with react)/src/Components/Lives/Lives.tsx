import React from "react";
import styles from "./Lives.module.css";

interface Props {
  Lives: number;
}

const Lives = ({ Lives }: Props) => {
  return <div className={styles.Lives}>Lives: {Lives}</div>;
};

export default Lives;
