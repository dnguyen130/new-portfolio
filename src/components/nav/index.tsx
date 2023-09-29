import { ReactElement } from "react";
import { MdMenu } from "react-icons/md";

import styles from "@/styles/nav.module.css";

export default function Nav(): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.hamburger}>
        <MdMenu size="100%" />
      </div>
    </div>
  );
}
