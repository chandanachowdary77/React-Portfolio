import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const contacts = [
    {
      icon: "contact/linkedinIcon.png",
      alt: "LinkedIn",
      href: "https://www.linkedin.com/in/t-madhu-chandana-devi-710a53269",
      text: "LinkedIn",
    },
    {
      icon: "contact/githubIcon.png",
      alt: "GitHub",
      href: "https://github.com/chandanachowdary77",
      text: "GitHub",
    },
    {
      icon: "contact/emailIcon.png",
      alt: "Email",
      href: "mailto:chandanachowdary476@gmail.com",
      text: "Gmail",
    },
  ];

  return (
    <footer id="contact" className={styles.container}>
      <h2 className={styles.title}>CONTACT</h2>
      <div className={styles.contactGrid}>
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactItem}
          >
            <img
              src={getImageUrl(contact.icon)}
              alt={contact.alt}
              className={styles.icon}
            />
            <span>{contact.text}</span>
          </a>
        ))}
      </div>
    </footer>
  );
};
