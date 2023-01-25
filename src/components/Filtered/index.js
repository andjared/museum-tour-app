import React from "react";
import Card from "../Card";

const Filtered = ({ filtered }) => {
  return (
    <>
      {filtered.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </>
  );
};

export default Filtered;
