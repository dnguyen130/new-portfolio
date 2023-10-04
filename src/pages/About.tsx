import { ReactElement } from "react";

import styles from "./About.module.css";
import portrait from "@/assets/portraitsquaremod.png";

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
            Why hello! Thank you for taking the time to learn more about me and
            my experience in web development. My first experience with the web
            was back in 2003 when I created my first email account to play
            Neopets, a virtual pet website. Since then, my whole life, like many
            others, has revolved around using the web to communicate and learn
            from others.
          </p>
          <p>
            At the{" "}
            <a href="https://www.bcit.ca/" target="_blank">
              <span>British Columbia Institute of Technology</span>
            </a>
            , I was able to experience a fast-paced, cooperative school
            environment. I developed technical and social skills working in
            teams of designers and developers to produce web and mobile
            applications through their{" "}
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
            learning new web technologies. I also love playing games, such as
            Final Fantasy XIV and Path of Exile, to let the coding brain rest.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
