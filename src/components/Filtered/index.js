import React, { useState, useEffect, useCallback, useRef } from "react";
import Card from "../Card";
import styles from "./Filtered.module.scss";

const Filtered = ({ searchParam }) => {
  const [filteredData, setFilteredData] = useState([]);
  const fetchRef = useRef(false);

  const searchByParam = useCallback(async () => {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${searchParam}`
    );
    const data = await response.json();

    data.data.forEach((item) => getFilteredData(item.api_link));
  }, [searchParam]);

  const getFilteredData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setFilteredData((prev) => [data.data, ...prev]);
  };

  useEffect(() => {
    if (fetchRef.current === false) {
      searchByParam(searchParam);
    }
    return () => {
      fetchRef.current = true;
    };
  }, [searchByParam, searchParam]);
  return (
    <section className={styles.filtered}>
      {filteredData && (
        <ul className={styles.list}>
          {filteredData.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Filtered;
