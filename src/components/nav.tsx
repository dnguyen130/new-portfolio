import { ReactElement } from "react";
import {
  TbLayoutNavbarExpandFilled,
  TbLayoutBottombarExpandFilled,
} from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./nav.module.css";

interface NavType {
  active: boolean;
  activeSection: string | null;
  onIconClick: (e: React.MouseEvent) => void;
  onLinkClick: () => void;
}

export default function Nav({
  active,
  activeSection,
  onIconClick,
  onLinkClick,
}: NavType): ReactElement {
  return (
    <nav className={styles.container}>
      <div className={styles.hamburger} onClick={onIconClick}>
        <AnimatePresence>
          {!active && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: active ? 0 : 1 }}
              exit={{ opacity: 0 }}
              className={styles.hamburger_icon}
            >
              <TbLayoutBottombarExpandFilled size="100%" />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: active ? 1 : 0 }}
              exit={{ opacity: 0 }}
              className={styles.hamburger_icon}
            >
              <TbLayoutNavbarExpandFilled size="100%" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            className={styles.links}
            initial={{ height: 0 }}
            animate={{
              height: active ? 150 : 0,
            }}
            exit={{
              height: 0,
            }}
          >
            <a
              href="#home"
              className={activeSection === "home" ? styles.active_link : null}
              onClick={onLinkClick}
            >
              Home
            </a>
            <a
              href="#about"
              className={activeSection === "about" ? styles.active_link : null}
              onClick={onLinkClick}
            >
              About
            </a>
            <a
              href="#projects"
              className={
                activeSection === "projects" ? styles.active_link : null
              }
              onClick={onLinkClick}
            >
              Projects
            </a>
            <a href="/resume.pdf" target="_blank">
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
