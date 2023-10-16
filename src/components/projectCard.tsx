import { ReactElement, ReactNode } from "react";

import styles from "./projectCard.module.css";

interface ProjectCardType {
  title: string;
  description: string;
  image_url: string;
  image_style: string;
  iconArray: ReactNode[];
  HeaderOnClick: () => void;
  demo?: string;
  server?: string;
  youtube?: string;
  github: string;
}

export default function ProjectCard({
  title,
  description,
  image_url,
  image_style,
  iconArray,
  HeaderOnClick,
  demo,
  server,
  youtube,
  github,
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
        <div className={image_style}>
          <img src={image_url} />
        </div>
        <div className={styles.content_rightside}>
          <p>{description}</p>
          <div className={styles.icon_array_mobile}>
            {iconArray.map((o) => {
              return o;
            })}
          </div>
          <div className={styles.button_container}>
            {demo && (
              <a href={demo} target="_blank">
                Live Site
              </a>
            )}
            <a href={github} target="_blank">
              Github
            </a>
            {server && (
              <a href={server} target="_blank">
                Server Github
              </a>
            )}
            {youtube && (
              <a href={youtube} target="_blank">
                Video Link
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
