import { ReactElement } from "react";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./emailModal.module.css";

interface ModalType {
  active: boolean;
  ModalButtonOnClick: () => void;
}

export default function EmailModal({
  active,
  ModalButtonOnClick,
}: ModalType): ReactElement {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          exit={{ opacity: 0 }}
        >
          <div className={styles.overlay} />
          <div className={styles.modal}>
            <div>
              <h2>Thanks for the message! 👋</h2>
              <p>I'll get back to you as soon as I can.</p>
            </div>
            <button onClick={ModalButtonOnClick}>Okay! 👌</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
