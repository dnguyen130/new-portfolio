import { ReactElement } from "react";
import { FaHome, FaLaptopCode } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiOutlineFileSearch } from "react-icons/ai";

import styles from "./navbar.module.css";

interface NavBarType {
  activeSection: string | null;
}

export default function Navbar({ activeSection }: NavBarType): ReactElement {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_background} />
      <a
        href="#home"
        className={
          activeSection == "home" ? styles.navlink_active : styles.navlink
        }
      >
        <FaHome size="100%" />
      </a>
      <a
        href="#about"
        className={
          activeSection == "about" ? styles.navlink_active : styles.navlink
        }
      >
        <BsPersonCircle size="100%" />
      </a>
      <a
        href="#projects"
        className={
          activeSection == "projects" ? styles.navlink_active : styles.navlink
        }
      >
        <FaLaptopCode size="100%" />
      </a>
      <a
        href="#contact"
        className={
          activeSection == "contact" ? styles.navlink_active : styles.navlink
        }
      >
        <MdEmail size="100%" />
      </a>
      <a
        href="http://www.dannynguyen.ca/resume.pdf"
        target="_blank"
        className={styles.navlink}
      >
        <AiOutlineFileSearch size="100%" />
      </a>
    </nav>
  );
}
