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
    description: `A simple to-do list with user authentication and database handled by
    Firebase. Track events and record journal entries in a secure web
    application.`,
    image_url:
      "https://res.cloudinary.com/dpc1qjocu/image/upload/v1696897234/stepahead_iubcoy.png",
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
    description: `A web application designed to browse, favourite, and share your favourite anime.`,
    image_url:
      "https://res.cloudinary.com/dpc1qjocu/image/upload/v1697073851/scout_ve2vb6.png",
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
    description: `Cross-platform mobile application created to allow users to order food or drinks to
    other individuals within a restaurant.`,
    image_url:
      "https://res.cloudinary.com/dpc1qjocu/image/upload/v1697074073/OnMe_Dashboard_rrdmoy.png",
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
    description: `A web application that guides the user through a series of questions to
    find a proper solution to everyday problems.`,
    image_url:
      "https://res.cloudinary.com/dpc1qjocu/image/upload/v1697074120/Steady_Menu_kdrjei.png",
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
              image_url={o.image_url}
              description={o.description}
              HeaderOnClick={() => {
                setActive(active === o.key ? "" : o.key);
              }}
            />
          );
        } else {
          return (
            <div key={i} className={styles.project_container}>
              <ProjectCard
                title={o.name}
                description={o.description}
                image_url={o.image_url}
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
