import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Nav from "./components/nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import BackToTop from "./components/backToTop";

function App() {
  const [active, setActive] = useState(false);
  const [posY, setPosY] = useState(0);
  const [posY2, setPosY2] = useState(0);
  const [posY3, setPosY3] = useState(0);
  const [posY4, setPosY4] = useState(0);

  // Navigation Functions

  const [activeSection, setActiveSection] = useState<string | null>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;
      setPosY(scrollPosition / 15);
      setPosY2(scrollPosition / 7);
      setPosY3(scrollPosition / 6);
      setPosY4(scrollPosition / 5);

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
      <motion.div
        className="background_accent"
        style={{ top: posY + 200 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />
      <motion.div
        className="background_accent2"
        style={{ top: posY2 - 200 }}
        animate={{ opacity: [0.5, 0, 0.5] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div
        className="background_accent3"
        style={{ top: posY3 - 600 }}
        animate={{ opacity: [0.5, 0, 0.5] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
      <motion.div
        className="background_accent4"
        style={{ top: posY4 - 1000 }}
        animate={{ opacity: [0.5, 0, 0.5] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
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
    </div>
  );
}

export default App;
