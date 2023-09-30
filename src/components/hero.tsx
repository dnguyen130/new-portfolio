import { ReactElement } from "react";

import styles from "./hero.module.css";

export default function Hero(): ReactElement {
  return (
    <header className={styles.container}>
      <h1>DANNY NGUYEN</h1>
    </header>
  );
}
