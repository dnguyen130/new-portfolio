import { ReactElement } from "react";
import { RiMenuFoldFill } from "react-icons/ri";

import styles from "./nav.module.css";

interface NavType {
  onIconClick: (e: React.MouseEvent) => void;
}

export default function Nav({ onIconClick }: NavType): ReactElement {
  return (
    <nav className={styles.container} onClick={onIconClick}>
      <div className={styles.hamburger_icon}>
        <RiMenuFoldFill size="100%" />
      </div>
    </nav>
  );
}
