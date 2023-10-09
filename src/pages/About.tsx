import { ReactElement } from "react";

import styles from "./About.module.css";
import portrait from "@/assets/portrait.jpg";
import TechGroup from "@/components/techGroup";

export default function About(): ReactElement {
  return (
    <section className={styles.container} id="about">
      <h1>About</h1>
      <div className={styles.content}>
        <div className={styles.column}>
          <div className={styles.portrait}>
            <img src={portrait} />
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
            .
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
