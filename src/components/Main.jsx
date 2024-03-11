import { useState, useEffect } from "react";
import Cards from "./Cards";
import mockPicArray from "./mockData";

export default function Main({ picArray, updatePicArray, handleClick }) {
  useEffect(() => {
    updatePicArray();
  }, []);

  return (
    <main>
      <div className="cardContainer">
        <Cards picArray={picArray} handleClick={handleClick} />
      </div>
    </main>
  );
}
