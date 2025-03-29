import React from "react";
import styles from "./Experience.module.css";

export const Experience = () => {
  const history = [
    {
      organisation: "Bharat Internship",
      role: "Web Developer Intern",
      startDate: "March 2024",
      endDate: "April 2024",
      experiences: [
        "Developed a responsive Netflix home page clone and personal portfolio using HTML, CSS, and JavaScript.",
        "Gained practical experience in front-end web development and responsive design."
      ],
      certificateLink: "https://drive.google.com/file/d/1MPMsqXwk0T41HYimMfF_G1tYVO5eL5ev/view?usp=drivesdk"
    },
    {
      organisation: "Web Full Stack Virtual Internship",
      role: "Full Stack Developer Intern",
      startDate: "October 2024",
      endDate: "December 2024",
      experiences: [
        "Worked on a full-stack web development project.",
        "Gained experience with front-end and back-end technologies."
      ],
      certificateLink: "https://drive.google.com/file/d/15sBSBLFQYPIJBtq0e9sMYhCze567ELnr/view?usp=drivesdk"
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
