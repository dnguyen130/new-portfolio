import { ReactElement } from "react";

import styles from "./About.module.css";

export default function About(): ReactElement {
  return (
    <section
      className={styles.container}
      id="about"
      style={{ height: "100vh" }}
    ></section>
  );
}
