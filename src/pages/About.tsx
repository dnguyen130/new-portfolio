import { ReactElement } from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { HiMail } from "react-icons/hi";

import styles from "./About.module.css";
import TechGroup from "@/components/techGroup";

export default function About(): ReactElement {
  return (
    <section className={styles.container} id="about">
      <h1>About</h1>
      <div className={styles.content}>
        <div className={styles.column}>
          <div className={styles.portrait}>
            <img src="https://res.cloudinary.com/dpc1qjocu/image/upload/v1698282465/headshot_small_ujwq37.png" />
            <div className={styles.social_container}>
              <a
                href="https://www.linkedin.com/in/dannytnguyendev/"
                target="_blank"
              >
                <SiLinkedin size="70%" />
              </a>
              <a href="https://github.com/dnguyen130" target="_blank">
                <SiGithub size="70%" />
              </a>
              <a
                href="mailto:dannytnguyen.dev@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <HiMail size="70%" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <p>
            I am a front end developer with a passion for bringing ideas and
            dreams to life through code.
          </p>
          <p>
            I graduated from the{" "}
            <a href="https://www.bcit.ca/" target="_blank">
              <span>British Columbia Institute of Technology</span>
            </a>
            , a polytechnic institute which emphasized learning real workplace
            skills. I developed technical and social skills working in teams of
            designers and developers to produce web and mobile applications
            through their{" "}
            <a
              href="https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6515dipma/"
              target="_blank"
            >
              <span>Digital Design and Development Program</span>
            </a>
            . I was then able to apply this learning in a 2 month internship,
            where I accomplished
          </p>
          <p>
            Currently, I spend my time at the local library, working on various
            personal web projects to hone my development skills while also
            learning new web technologies. In my spare time, I love playing
            games, like Final Fantasy XIV and Path of Exile.{" "}
          </p>
        </div>
      </div>
      <h2>Some tech I've used...</h2>
      <TechGroup />
    </section>
  );
}
