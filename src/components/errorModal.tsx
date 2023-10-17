import { ReactElement } from "react";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./emailModal.module.css";

interface ModalType {
  active: boolean;
  ModalButtonOnClick: () => void;
}

export default function ErrorModal({
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
              <h2>I couldn't send the message... 🥲</h2>
              <p>Send me a message through one of my socials instead.</p>
            </div>
            <button onClick={ModalButtonOnClick}>Okay... 🫤</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
