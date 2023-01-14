import React, { useEffect, useCallback } from "react";

const Types = () => {
  const searchByArtworkType = useCallback(async () => {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artwork-types?limit=40`
    );
    const data = await response.json();
    console.log(data);
  }, []);

  useEffect(() => {
    searchByArtworkType();
  }, [searchByArtworkType]);
  return <section id="types">Types</section>;
};

export default Types;
