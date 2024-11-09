import React from "react";
import about from "../custom_css/about.module.css";

const About = () => {
  return (
    <div className={about.mainTag}>
      <h1 className={about.h1Tag}>About Me</h1>
      <div className={about.mainTag2}>
        <p className={about.pTag}>
          <span className={about.spanTag}>Hi, I’m Ayesha Iqbal</span>, a
          passionate front-end developer dedicated to crafting engaging and
          intuitive digital experiences. With a strong foundation in HTML, CSS,
          and JavaScript, I thrive on turning ideas into reality using modern
          frameworks like TypeScript and Next.js.
        </p>
        <p className={about.pTag}>
          My journey in web development began with a curiosity for how things
          work, and it has evolved into a love for creating beautiful and
          responsive user interfaces. I enjoy leveraging Tailwind CSS to build
          sleek designs that not only look good but also enhance usability.
        </p>
        <p className={about.pTag}>
          I have experience working on various projects, from small personal
          websites to larger applications, always focusing on clean code and
          optimal performance. I believe in the power of collaboration and am
          always eager to learn from others while sharing my knowledge.
        </p>
        <p className={about.pTag}>
          Outside of coding, I enjoy design, clothing, photography, and reading,
          all of which inspire my creativity and keep me refreshed. I’m excited
          about new challenges and opportunities to contribute to innovative
          projects.
        </p>
        <p className={about.pTag}>
          Let’s connect and build something amazing together!
        </p>
        <div className={about.imgTag}>
          <img
            src="/images/hero pic.jpg"
            alt="About Me"
            className={about.img}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
