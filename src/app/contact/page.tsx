import React from "react";
import contact from "../custom_css/contact.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  return (
    <div className={contact.divTag}>
      <h1 className={contact.h1Tag}>Contact Me</h1>
      <div className={contact.divTag2}>
        <h2 className={contact.h2Tag}>
          Let’s Collaborate on Your Next Venture
        </h2>
        <p className={contact.pTag}>
          Do you have a question or want to collaborate on something new?
          Whether you're curious about emerging technologies, seeking advice on
          your current projects, or simply looking to connect, I’m here for you.
          Don’t hesitate to reach out so we can explore exciting opportunities
          to work together!
        </p>
        <div className={contact.divTag3}>
          <button className={contact.buttonTag}>Get In Touch</button>
        </div>

        <div className={contact.divTag4}>
          <Link
            href="https://www.linkedin.com/in/ayesha-iqbal-2613402b4/"
            target="-blank"
          >
            <FaLinkedin className={contact.iconsTag} />
          </Link>
          <Link href="https://github.com/Ayesha1130" target="-blank">
            <FaGithub className={contact.iconsTag} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
