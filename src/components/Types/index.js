import React, { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import Filtered from "../Filtered";
import styles from "./Types.module.scss";

const Types = ({ types, setTypes }) => {
  const [filtered, setFiltered] = useState([]);

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

  const searchByType = async (type) => {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${type}`
    );
    const data = await response.json();
    data.data.forEach((item) => getFilteredData(item.api_link));
  };

  const getFilteredData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setFiltered((prev) => [...prev, data.data]);
  };

  return (
    <section className={styles.types}>
      {types && (
        <ul className={filtered.length ? styles.filtered : styles.list}>
          {!filtered.length ? (
            sortTitles().map((title, index) => (
              <li
                key={index}
                onClick={() => searchByType(title)}
                className={styles.type}
              >
                <div>{title}</div>
              </li>
            ))
          ) : (
            <Filtered filtered={filtered} path="types/filtered" />
          )}
        </ul>
      )}
    </section>
  );
};

export default Types;
