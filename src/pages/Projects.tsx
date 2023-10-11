import { ReactElement, useState } from "react";
import ProjectCard from "@/components/projectCard";

import styles from "./Projects.module.css";
import {
  SiExpo,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiSass,
  SiStyledcomponents,
  SiVite,
} from "react-icons/si";

const PROJECTS = [
  {
    key: "stepahead",
    name: "Step Ahead",
    icons: [
      <SiReact size="100%" />,
      <SiVite size="100%" />,
      <SiSass size="100%" />,
      <SiFirebase size="100%" />,
    ],
  },
  {
    key: "scout",
    name: "Scout",
    icons: [
      <SiReact size="100%" />,
      <SiNextdotjs size="100%" />,
      <SiStyledcomponents size="100%" />,
      <SiMongodb size="100%" />,
    ],
  },
  {
    key: "onme",
    name: "OnMe",
    icons: [
      <SiReact size="100%" />,
      <SiExpo size="100%" />,
      <SiMysql size="100%" />,
      <SiPhp size="100%" />,
    ],
  },
  {
    key: "steady",
    name: "Steady",
    icons: [
      <SiReact size="100%" />,
      <SiNextdotjs size="100%" />,
      <SiStyledcomponents size="100%" />,
    ],
  },
];

export default function Projects(): ReactElement {
  const [active, setActive] = useState("");

  return (
    <section className={styles.container} id="projects">
      <h1>Projects</h1>
      {PROJECTS.map((o, i) => {
        if (i == PROJECTS.length - 1) {
          return (
            <ProjectCard
              title={o.name}
              key={i}
              iconArray={o.icons}
              active={active === o.key}
              HeaderOnClick={() => {
                setActive(active === o.key ? "" : o.key);
              }}
            />
          );
        } else {
          return (
            <div key={i}>
              <ProjectCard
                title={o.name}
                active={active === o.key}
                iconArray={o.icons}
                HeaderOnClick={() => {
                  setActive(active === o.key ? "" : o.key);
                }}
              />
              <div className={styles.separator} />
            </div>
          );
        }
      })}
    </section>
  );
}
