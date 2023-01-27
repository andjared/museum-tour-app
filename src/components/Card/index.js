import React from "react";
import { useState } from "react";
import styles from "./Card.module.scss";

const Card = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const {
    title,
    artist_title,
    date_display,
    image_id,
    place_of_origin,
    department_title,
  } = item;

  return (
    <li
      className={styles.card}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? (
        <div className={styles.content}>
          <img
            src={`https://www.artic.edu/iiif/2/${image_id}/full/800,/0/default.jpg`}
            alt={title}
          />

          <div className={styles.text}>
            <h3>{title.toLowerCase()}</h3>
            <h4>Artist: {artist_title || "unknown"}</h4>
          </div>
        </div>
      ) : (
        <div className={styles.info}>
          <p>Date display: {date_display}</p>
          <p>Place of origin: {place_of_origin || "unknown"}</p>
          <p>Department: {department_title}</p>
        </div>
      )}
    </li>
  );
};

export default Card;
