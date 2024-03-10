import { useState, useEffect } from "react";
import Cards from "./Cards";
import mockPicArray from "./mockData";

export default function Main() {
  const [picArray, setPicArray] = useState(Array.from({ length: 12 }));
  // const [availableCards, setAvailableCards]= useState([])

  useEffect(() => {
    const newPicArray = [];

    const getData = () => mockPicArray();
    //   fetch(
    //     `https://api.unsplash.com/photos/random/?client_id=ilZSWZPGk4_RCtBf634WmDEcGio2Iy2No4CHPnt28EE
    // `,
    //     { mode: "cors" }
    //   ).then((resolve) => {
    //     return resolve.json();
    //   });

    const updatePicArray = () => {
      return Promise.all(
        picArray.map((a, i) => {
          return getData()[i];
        })
      ).then((resolve) => {
        resolve.map((item) => {
          newPicArray.push(item);
        });
        setPicArray(newPicArray);
      });
    };
    updatePicArray();
  }, []);

  function handleClick() {
    setPicArray(shuffleArray(picArray));
  }

  const shuffleArray = (arr) => {
    const a = [...arr];
    for (let i = 0; i < a.length; i++) {
      let j = Math.floor(Math.random() * i);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  return (
    <main>
      <div className="cardContainer">
        <Cards picArray={picArray} handleClick={handleClick} />
      </div>
    </main>
  );
}
