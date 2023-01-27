import React, { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Types.module.scss";

const Types = ({ types, setTypes, setSearchParam }) => {
  const navigate = useNavigate();

  const goToFiltered = (type) => {
    setSearchParam(type);
    navigate("/filtered");
  };

  const getAllTypes = useCallback(async () => {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artwork-types?limit=44`
    );
    const data = await response.json();
    setTypes(data.data);
  }, [setTypes]);

  useEffect(() => {
    getAllTypes();
  }, [getAllTypes]);

  const sortTitles = () => {
    const titles = types.map((type) => type.title);
    return titles.sort();
  };

  return (
    <section className={styles.types}>
      {types && (
        <ul className={styles.list}>
          {sortTitles().map((title, index) => (
            <li
              key={index}
              onClick={() => goToFiltered(title)}
              className={styles.type}
            >
              {title}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Types;
