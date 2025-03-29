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
        <a href="https://drive.google.com/file/d/1A8bmJTiAK7MZEb8uAAgZLIJTdwGwhh6H/view?usp=drivesdk" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img src="/src/components/hero/heroImage.png" alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
