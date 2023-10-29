import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CgClose } from "react-icons/cg";

import Nav from "./components/nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import BackToTop from "./components/backToTop";
import Footer from "./components/footer";
import Contact from "./pages/Contact";
import Navbar from "./components/navbar";

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

        if (scrollPosition >= sectionTop - sectionHeight / 4) {
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
  }, [activeSection]);

  return (
    <div className="page_cont">
      <Navbar activeSection={activeSection} />
      <div className="nav_placeholder" />
      <div className="page_content">
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
        <BackToTop isVisible={activeSection !== "home"} />
        <div className="page_wrapper">
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
        <Nav
          onIconClick={(e) => {
            e.stopPropagation();
            setActive(!active);
          }}
        />
        <AnimatePresence>
          {active && (
            <motion.div
              className="nav_drawer"
              initial={{
                x: 600,
              }}
              animate={{
                x: active ? 0 : 600,
                transition: {
                  duration: 0.4,
                  ease: "easeOut",
                },
              }}
              exit={{
                x: 1000,
                transition: {
                  duration: 0.4,
                  ease: "easeOut",
                },
              }}
            >
              <div className="nav_close" onClick={() => setActive(false)}>
                <CgClose size="70%" />
              </div>
              <a
                href="#home"
                className={
                  activeSection === "home" ? "active_nav_link" : "nav_link"
                }
                onClick={() => setActive(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className={
                  activeSection === "about" ? "active_nav_link" : "nav_link"
                }
                onClick={() => setActive(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className={
                  activeSection === "projects" ? "active_nav_link" : "nav_link"
                }
                onClick={() => setActive(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className={
                  activeSection === "contact" ? "active_nav_link" : "nav_link"
                }
                onClick={() => setActive(false)}
              >
                Contact
              </a>
              <a href="https://www.dannynguyen.ca/resume.pdf" target="_blank">
                Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
