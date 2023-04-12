import React from "react";
import styles from "./Break.module.css";

interface Props {
  id: string;
}

const Break = ({ id }: Props) => {
  return <div className={styles.Break} id={id}></div>;
};

export default Break;
