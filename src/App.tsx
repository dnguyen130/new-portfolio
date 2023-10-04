import { useState, useEffect } from "react";

import Nav from "./components/nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import BackToTop from "./components/backToTop";

function App() {
  const [active, setActive] = useState(false);

  // Navigation Functions

  const [activeSection, setActiveSection] = useState<string | null>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop - sectionHeight / 3) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (activeSection) {
      history.replaceState(true, "", "#" + activeSection);
    }
    if (activeSection !== "home") {
      setActive(false);
    }
  }, [activeSection]);

  return (
    <div className="page_cont">
      <Nav
        active={active}
        onIconClick={() => setActive(!active)}
        onLinkClick={() => setActive(false)}
        activeSection={activeSection}
      />
      <BackToTop isVisible={activeSection !== "home" ? true : false} />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
