"use client";
import Link from "next/link";
import hero from "../custom_css/hero.module.css";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className={hero.sectionTag}>
      <h1 className={hero.h1Tag}>
        <span className={hero.spanTag}>Hello ! </span>
        Ayesha Iqbal Here
      </h1>
      <h2 className={hero.h2Tag}>
        <span className={hero.spanTag}>Passionate</span>
        <Typewriter
          options={{
            strings: [
              "Front-End Developer",
              "Software Engineer",
              "Web Developer",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>

      <p className={hero.pTag}>
        "Specializing in modern web development,I leverage cutting-edge
        technologies like Tailwind CSS and Next.js to create responsive,
        high-performance applications.
      </p>
      <p className={hero.pTag}>
        Let’s collaborate to turn your vision into reality!"
      </p>

      <img src="/images/hero pic.jpg" alt="" className={hero.imgTag} />
      <button className={hero.buttonTag}>
        <Link href="/contact">Contact Us</Link>
      </button>
    </section>
  );
};

export default Hero;
