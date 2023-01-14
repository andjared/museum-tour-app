import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <Link to="/types">
          <li>Serch by Artwork Type</li>
        </Link>
        <Link to="/places">
          <li>Search By Place Of Origin</li>
        </Link>
        <Link to="random">
          <li>Random Artworks Data</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
