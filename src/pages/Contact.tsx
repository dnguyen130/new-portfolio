import { ReactElement, useRef } from "react";
import emailjs from "@emailjs/browser";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { HiMail } from "react-icons/hi";

import styles from "./Contact.module.css";

export default function Contact(): ReactElement {
  const form = useRef(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentForm = form.current;
    if (currentForm == null) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_KEY,
        import.meta.env.VITE_EMAILJS_TEMPLATE_KEY,
        currentForm,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result: { text: string }) => {
          console.log(result.text);
        },
        (error: { text: string }) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className={styles.container}>
      <h1>Let's Chat</h1>
      <div className={styles.content}>
        <h3>Contact me through my socials,</h3>
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
        </div>
        <h3>Or send me a message directly.</h3>
        <form onSubmit={onSubmit} ref={form}>
          <label htmlFor="user_name">Name</label>
          <input type="text" id="user_name" name="user_name" />
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} />
          <button type="submit" value="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
