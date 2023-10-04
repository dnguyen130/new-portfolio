import { ReactElement } from "react";
import Hero from "@/components/hero";

export default function Home(): ReactElement {
  return (
    <div className="home_cont">
      {/* <div className="spin" /> */}
      <div className="splash_border" />
      <section className="splash" id="home">
        <Hero />
      </section>
    </div>
  );
}
