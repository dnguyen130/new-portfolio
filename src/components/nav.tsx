import { ReactElement } from "react";
import { MdMenu } from "react-icons/md";

import styles from "./nav.module.css";

export default function Nav(): ReactElement {
  return (
    <nav className={styles.container}>
      <div className={styles.hamburger}>
        <MdMenu size="100%" />
      </div>
    </nav>
  );
}
