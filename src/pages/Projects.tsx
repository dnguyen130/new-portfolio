import { ReactElement } from "react";

import styles from "./Projects.module.css";

export default function Projects(): ReactElement {
  return (
    <section
      className={styles.container}
      id="projects"
      style={{ height: "100vh" }}
    >
      <h1>Projects</h1>
    </section>
  );
}
