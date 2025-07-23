import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.madhu}>Madhu</span>
        </h1>
        <p className={styles.description}>
          I'm a passionate Full Stack Developer. I build beautiful and user-friendly websites and applications. With a focus on both design and development, I create seamless experiences that help you achieve your goals. Let’s build something amazing together!
        </p>
        <a href="https://drive.google.com/file/d/107SloL-U-3G7g08QFASmvRqFyDEbup8F/view?usp=sharing" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img src="/heroImage.jpg" alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
