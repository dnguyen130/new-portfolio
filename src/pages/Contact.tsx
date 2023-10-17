import { ReactElement, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SiLinkedin, SiGithub } from "react-icons/si";
import EmailModal from "@/components/emailModal";

import styles from "./Contact.module.css";

export default function Contact(): ReactElement {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
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
          const contactForm = document.getElementById(
            "contact_form",
          ) as HTMLFormElement;
          contactForm.reset();
          setLoading(false);
          setModal(true);
          console.log(result.text);
        },
        (error: { text: string }) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className={styles.container}>
      <EmailModal active={modal} ModalButtonOnClick={() => setModal(false)} />
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
        <form onSubmit={onSubmit} ref={form} id="contact_form">
          <label htmlFor="user_name">Name</label>
          <input type="text" id="user_name" name="user_name" required />
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required />
          <button
            type="submit"
            value="submit"
            className={
              loading ? styles.submit_button_disabled : styles.submit_button
            }
          >
            {!loading && <div>Send</div>}
            {loading && <div className="loader" />}
          </button>
        </form>
      </div>
    </div>
  );
}
