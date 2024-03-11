import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import mockPicArray from "./mockData";

export default function App() {
  const [picArray, setPicArray] = useState(Array.from({ length: 12 }));
  const [availableCards, setAvailableCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const getData = () => mockPicArray();
  //   fetch(
  //     `https://api.unsplash.com/photos/random/?client_id=ilZSWZPGk4_RCtBf634WmDEcGio2Iy2No4CHPnt28EE
  // `,
  //     { mode: "cors" }
  //   ).then((resolve) => {
  //     return resolve.json();
  //   });

  const updatePicArray = () => {
    const newPicArray = [];
    return Promise.all(
      picArray.map((a, i) => {
        return getData()[i];
      })
    ).then((resolve) => {
      resolve.map((item) => {
        newPicArray.push(item);
      });
      setPicArray(newPicArray);
      setAvailableCards(newPicArray.map((i) => i.id));
    });
  };

  function handleClick(e) {
    setPicArray(shuffleArray(picArray));
    updateScore(e);
    updateBest();
  }

  function shuffleArray(arr) {
    const a = [...arr];
    for (let i = 0; i < a.length; i++) {
      let j = Math.floor(Math.random() * i);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function updateScore(e) {
    const key = e.target.key;
    if (availableCards.includes(key)) {
      setCurrentScore(currentScore + 1);
    }
  }

  function updateBest() {
    if (currentScore - bestScore >= 0) {
      setBestScore(bestScore + 1);
    }
  }

  return (
    <>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <Main
        getData={getData}
        picArray={picArray}
        updatePicArray={updatePicArray}
        handleClick={handleClick}
      />
    </>
  );
}

// set up header, main, footer components

// useEffect in main for downloading images
//    updates the images container
//    updates the availableCardsArray
//    returns cleanup to empty images container and availableCardsArray
//    empty dependency array to run once on mount

// handleOnClick will
//    if pic is in availableCardsArray
//        pop that card from the array
//        current +=1
//        if current>best score state, update best
//    shuffle the images conainer
