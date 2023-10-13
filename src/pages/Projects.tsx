import { ReactElement, useState } from "react";
import ProjectCard from "@/components/projectCard";

import styles from "./Projects.module.css";
import {
  SiExpo,
  SiFirebase,
  SiFramer,
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
    image_style: "landscape",
    demo: "https://stepahead.vercel.app/",
    github: "https://github.com/dnguyen130/stepahead",
    icons: [
      <SiReact size="100%" />,
      <SiVite size="100%" />,
      <SiSass size="100%" />,
      <SiFirebase size="100%" />,
    ],
  },
  {
    key: "bestbuyclone",
    name: "Best Buy Design Clone",
    description: `A 1 to 1 clone of a Best Buy home page from Summer 2023. Features rich use of CSS grid
    and responsive design mirroring Best Buy's home page layout. Accurate carousels created with Slick-Carousel and
    dropdown menus with Framer.`,
    image_url:
      "https://res.cloudinary.com/dpc1qjocu/image/upload/v1697160399/bestbuy_rqdy0p.png",
    image_style: "landscape",
    demo: "https://best-buy-clone-2d1056.netlify.app/",
    github: "https://github.com/dnguyen130/bestbuy-clone",
    icons: [
      <SiReact size="100%" />,
      <SiVite size="100%" />,
      <SiFramer size="100%" />,
    ],
  },
  {
    key: "scout",
    name: "Scout",
    description: `A web application designed to browse, favourite, and share your favourite anime. 
    Full stack application with a custom API created with MongoDB with a full database uploade from Kaggle.`,
    image_url:
      "https://res.cloudinary.com/dpc1qjocu/image/upload/v1697073851/scout_ve2vb6.png",
    image_style: "landscape",
    demo: "https://scout-delta.vercel.app/",
    server: "https://github.com/wilyyy/scout-serverside",
    github: "https://github.com/wilyyy/Scout",
    icons: [
      <SiReact size="100%" />,
      <SiNextdotjs size="100%" />,
      <SiStyledcomponents size="100%" />,
      <SiMongodb size="100%" />,
    ],
  },
  {
    key: "portfolio_old",
    name: "Portfolio_v1",
    description: `Previous portfolio created with the fundamentals learned from BCIT. Showcases 
    responsive design with multiple pages to improve SEO. Monochromatic colour scheme with enter
    and exit animations with Framer.`,
    image_url:
      "https://res.cloudinary.com/dpc1qjocu/image/upload/v1697160331/cover_nfmntx.png",
    image_style: "landscape",
    demo: "https://v1.dannynguyen.ca/",
    github: "https://github.com/dnguyen130/portfolio_v1",
    icons: [
      <SiReact size="100%" />,
      <SiNextdotjs size="100%" />,
      <SiStyledcomponents size="100%" />,
      <SiFramer size="100%" />,
    ],
  },
  {
    key: "onme",
    name: "OnMe",
    description: `Cross-platform mobile application created to allow users to order food or drinks to
    other individuals within a restaurant. Created with React-Native on the Expo platform and a custom
    PHP API to communicate with the MySQL database.`,
    image_url:
      "https://res.cloudinary.com/dpc1qjocu/image/upload/v1697074073/OnMe_Dashboard_rrdmoy.png",
    image_style: "portrait",
    github: "https://github.com/dnguyen130/OnMe",
    server: "https://github.com/dnguyen130/OnMe-Serverside",
    youtube: "https://www.youtube.com/watch?v=1NiF7avZNEI",
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
    find a proper solution to everyday problems. First project to apply responsive web design and
    temporary data management with local storage.`,
    image_url:
      "https://res.cloudinary.com/dpc1qjocu/image/upload/v1697147762/Steady_Menu_kdrjei.png",
    image_style: "portrait",
    github: "https://github.com/wilyyy/Steady",
    demo: "https://steadyofficial.vercel.app/",
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
            <div key={i} className={styles.project_container}>
              <ProjectCard
                title={o.name}
                iconArray={o.icons}
                image_url={o.image_url}
                image_style={o.image_style}
                description={o.description}
                HeaderOnClick={() => {
                  setActive(active === o.key ? "" : o.key);
                }}
                github={o.github}
                demo={o.demo}
                server={o.server}
                youtube={o.youtube}
              />
            </div>
          );
        } else {
          return (
            <div key={i} className={styles.project_container}>
              <ProjectCard
                title={o.name}
                description={o.description}
                image_url={o.image_url}
                image_style={o.image_style}
                iconArray={o.icons}
                HeaderOnClick={() => {
                  setActive(active === o.key ? "" : o.key);
                }}
                github={o.github}
                demo={o.demo}
                server={o.server}
                youtube={o.youtube}
              />
              <div className={styles.separator} />
            </div>
          );
        }
      })}
    </section>
  );
}
