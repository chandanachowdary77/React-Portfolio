import React from "react";
import styles from "./Experience.module.css";

export const Experience = () => {
  const history = [
    {
  organisation: "SmartInternz",
  role: "Intern",
  startDate: "May 2025",
  endDate: "July 2025",
  experiences: [
    "Completed an industry-level internship with hands-on experience in real-time projects.",
    "Worked under expert mentorship and enhanced practical knowledge in software development."
  ],
  certificateLink: "https://drive.google.com/file/d/1qW-78k1a3X06F9Ip5Xmt8pGKQNoskHU7/view?usp=sharing"
},
    {
  "organisation": "Digital Blinc",
  "role": "Full Stack Developer Intern",
  "startDate": "March 2025",
  "endDate": "May 2025",
  "experiences": [
    "Completed a Full Stack Development internship covering frontend, backend, APIs, and database management.",
    "Built hands-on experience in developing complete web applications using modern technologies."
  ],
  "certificateLink": "https://drive.google.com/file/d/11Vg107jZtCO9oXkjh8SGmw-9vsG8eHCg/view?usp=sharing"
},
  ];

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {history.map((historyItem, id) => (
          <div key={id} className={styles.experienceItem}>
            <div className={styles.experienceDetails}>
              <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
              <p className={styles.date}>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
              <ul className={styles.experienceList}>
                {historyItem.experiences.map((experience, idx) => (
                  <li key={idx}>{experience}</li>
                ))}
              </ul>
              {/* Certificate Link */}
              <div className={styles.certificateContainer}>
                <a 
                  href={historyItem.certificateLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.certificateButton}
                >
                  Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
