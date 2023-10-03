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
  onClick: () => void;
}

export default function Nav({
  active,
  activeSection,
  onClick,
}: NavType): ReactElement {
  return (
    <nav className={styles.container}>
      <div className={styles.hamburger} onClick={onClick}>
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
            >
              Home
            </a>
            <a
              href="#about"
              className={activeSection === "about" ? styles.active_link : null}
            >
              About Me
            </a>
            <a
              href="#projects"
              className={
                activeSection === "projects" ? styles.active_link : null
              }
            >
              Projects
            </a>
            <a
              href="#contact"
              className={
                activeSection === "contact" ? styles.active_link : null
              }
            >
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
