import { ReactElement } from "react";
import {
  SiReact,
  SiTypescript,
  SiRedux,
  SiNodedotjs,
  SiFirebase,
  SiMongodb,
  SiAdobecreativecloud,
  SiFigma,
  SiVite,
  SiStyledcomponents,
  SiSass,
  SiNextdotjs,
} from "react-icons/si";

import styles from "./techGroup.module.css";

const TECH_ICONS = [
  {
    element: <SiReact size="100%" />,
    name: "React",
  },
  {
    element: <SiTypescript size="100%" />,
    name: "TypeScript",
  },
  {
    element: <SiRedux size="100%" />,
    name: "Redux",
  },
  {
    element: <SiVite size="100%" />,
    name: "Vite",
  },
  {
    element: <SiNodedotjs size="100%" />,
    name: "Node.js",
  },
  {
    element: <SiNextdotjs size="100%" />,
    name: "Next.js",
  },
  {
    element: <SiFirebase size="100%" />,
    name: "Firebase",
  },
  {
    element: <SiMongodb size="100%" />,
    name: "MongoDB",
  },
  {
    element: <SiStyledcomponents size="100%" />,
    name: "Styled",
  },
  {
    element: <SiSass size="100%" />,
    name: "Sass/SCSS",
  },
  {
    element: <SiAdobecreativecloud size="100%" />,
    name: "Adobe CC",
  },
  {
    element: <SiFigma size="100%" />,
    name: "Figma",
  },
];

export default function TechGroup(): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {TECH_ICONS.map((o, i) => {
          return (
            <div className={styles.icon_group} key={i}>
              {o.element}
              <h4>{o.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
