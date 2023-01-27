import React from "react";
import { Link } from "react-router-dom";
import museumLogo from "../../../src/logo.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={museumLogo} alt="Art Institute of Chicago" />
      </Link>
      <h1>Art Institute of Chicago</h1>
    </header>
  );
};

export default Header;
