import { ReactElement } from "react";
import Hero from "@/components/hero";

export default function Home(): ReactElement {
  return (
    <>
      <div className="spin" />
      <div className="splash_border" />
      <section className="splash" id="home">
        <main>
          <Hero />
        </main>
      </section>
    </>
  );
}