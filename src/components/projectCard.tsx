import { ReactElement, ReactNode } from "react";

import styles from "./projectCard.module.css";

interface ProjectCardType {
  title: string;
  description: string;
  image_url: string;
  iconArray: ReactNode[];
  HeaderOnClick: () => void;
}

export default function ProjectCard({
  title,
  description,
  image_url,
  iconArray,
  HeaderOnClick,
}: ProjectCardType): ReactElement {
  return (
    <div className={styles.container} onClick={HeaderOnClick}>
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.icon_array}>
          {iconArray.map((o) => {
            return o;
          })}
        </div>
        <img src={image_url} />
        <div>
          <p>{description}</p>
          <div className={styles.icon_array_mobile}>
            {iconArray.map((o) => {
              return o;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
