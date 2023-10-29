import { ReactElement } from "react";
import Hero from "@/components/hero";

import styles from "./Home.module.css";

export default function Home(): ReactElement {
  return (
    <div className={styles.home_cont}>
      <div className="splash_border" />
      <section className={styles.splash} id="home">
        <Hero />
      </section>
    </div>
  );
}
