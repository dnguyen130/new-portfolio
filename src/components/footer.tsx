import { ReactElement } from "react";

import styles from "./footer.module.css";

export default function Footer(): ReactElement {
  return (
    <div className={styles.container}>
      © 2022 Designed and Developed by Danny Nguyen
    </div>
  );
}
