import React, { useEffect, useCallback } from "react";

const Places = () => {
  const searchByPlaces = useCallback(async () => {
    const response = await fetch(
      `https://api.artic.edu/api/v1/places/search?limit=100`
    );
    const data = await response.json();
    console.log(data);
  }, []);

  useEffect(() => {
    searchByPlaces();
  }, [searchByPlaces]);
  return <section>Places</section>;
};

export default Places;
