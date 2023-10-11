import { ReactElement, ReactNode } from "react";
import { BiChevronDown } from "react-icons/bi";
import { motion } from "framer-motion";

import styles from "./projectCard.module.css";

interface ProjectCardType {
  title: string;
  active: boolean;
  iconArray: ReactNode[];
  HeaderOnClick: () => void;
}

export default function ProjectCard({
  title,
  active,
  iconArray,
  HeaderOnClick,
}: ProjectCardType): ReactElement {
  return (
    <div className={styles.container} onClick={HeaderOnClick}>
      <div className={styles.header}>
        <div className={styles.icon_array}>
          <h2>{title}</h2>
          {iconArray.map((o) => {
            return o;
          })}
        </div>
        <div className={styles.arrow_icon}>
          <BiChevronDown size="100%" />
        </div>
      </div>
      <motion.div
        className={styles.content}
        initial={{ height: 0 }}
        animate={{ height: active ? "auto" : 0 }}
      >
        <div style={{ width: 100, height: 50, backgroundColor: "red" }} />
      </motion.div>
    </div>
  );
}
