import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("about");

  const handleClick = (item) => {
    setActiveItem(item);
    setMenuOpen(false); // Close the menu on item click
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
          {["about", "experience", "skills", "projects", "contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={activeItem === item ? styles.active : ""}
                  onClick={() => handleClick(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};
