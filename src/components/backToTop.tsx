import { ReactElement } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TbChevronsUp } from "react-icons/tb";

import styles from "./backToTop.module.css";

interface BackToTopType {
  isVisible: boolean;
}

export default function BackToTop({ isVisible }: BackToTopType): ReactElement {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a className={styles.container} href="#home">
          <TbChevronsUp size="80%" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
