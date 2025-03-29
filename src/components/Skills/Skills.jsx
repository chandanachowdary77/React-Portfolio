import React from "react";
import styles from "./Skills.module.css";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, 
  FaLightbulb, FaUsers, FaComments, FaSyncAlt, FaClock 
} from "react-icons/fa"; 

const technicalSkills = [
  { name: "HTML", icon: <FaHtml5 className={styles.skillIcon} />, percentage: 90 },
  { name: "CSS", icon: <FaCss3Alt className={styles.skillIcon} />, percentage: 85 },
  { name: "JavaScript", icon: <FaJs className={styles.skillIcon} />, percentage: 80 },
  { name: "React", icon: <FaReact className={styles.skillIcon} />, percentage: 75 },
  { name: "Node.js", icon: <FaNodeJs className={styles.skillIcon} />, percentage: 70 },
  { name: "Python", icon: <FaPython className={styles.skillIcon} />, percentage: 80 },
];

const nonTechnicalSkills = [
  { name: "Problem Solving", icon: <FaLightbulb className={styles.skillIcon} /> },
  { name: "Teamwork", icon: <FaUsers className={styles.skillIcon} /> },
  { name: "Communication", icon: <FaComments className={styles.skillIcon} /> },
  { name: "Adaptability", icon: <FaSyncAlt className={styles.skillIcon} /> },
  { name: "Time Management", icon: <FaClock className={styles.skillIcon} /> },
];

export const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h2>MY SKILLS</h2>

      <div className={styles.skillsSection}>
        {/* Technical Skills (Frontend + Backend Combined) */}
        <div className={styles.skillsBox}>
          <h3>Technical Skills</h3>
          <div className={styles.skillsContainer}>
            {technicalSkills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                {skill.icon}
                <p className={styles.skillName}>{skill.name}</p>
                <div className={styles.progressBarContainer}>
                  <div className={styles.progressBar} style={{ width: `${skill.percentage}%` }}></div>
                </div>
                <p className={styles.skillPercentage}>{skill.percentage}%</p>
              </div>
            ))}
          </div>
        </div>

        {/* Non-Technical Skills */}
        <div className={styles.skillsBox}>
          <h3>Non-Technical Skills</h3>
          <div className={styles.nonTechnicalSkillsContainer}>
            {nonTechnicalSkills.map((skill, index) => (
              <div key={index} className={styles.nonTechnicalSkillItem}>
                <div className={styles.nonTechnicalSkillIcon}>{skill.icon}</div>
                <p className={styles.skillName}>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
