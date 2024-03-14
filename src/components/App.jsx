import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import mockPicArray from "./mockData";

export default function App() {
  const [picArray, setPicArray] = useState(Array.from({ length: 12 }));
  const [availableCards, setAvailableCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // mock api version below-----------------------------

  // const getData = () => mockPicArray();

  // const updatePicArray = () => {
  //   const newPicArray = [];
  //   return Promise.all(
  //     picArray.map((a, i) => {
  //       return getData()[i];
  //     })
  //   ).then((resolve) => {
  //     resolve.map((item) => {
  //       newPicArray.push(item);
  //     });
  //     setPicArray(newPicArray);
  //     setAvailableCards(newPicArray.map((i) => i.id));
  //   });
  // };

  // mock api version above-----------------------------

  // live version below---------------------------------

  const getData = () =>
    fetch(
      `https://api.unsplash.com/photos/random/?client_id=ilZSWZPGk4_RCtBf634WmDEcGio2Iy2No4CHPnt28EE&count=12
  `,
      { mode: "cors" }
    ).then((resolve) => {
      return resolve.json();
    });

  const updatePicArray = async () => {
    const data = await getData();
    setPicArray(data);
    setAvailableCards(data.map((i) => i.id));
  };

  // live version above---------------------------------
  function handleClick(e) {
    setPicArray(shuffleArray(picArray));
    if (availableCards.length === 0) {
      resetAvailableCards();
      setCurrentScore(0);
    }
    if (cardAvailable(e)) {
      updateScore();
      updateBest();
      setAvailableCards(
        availableCards.filter((id) => id !== e.currentTarget.dataset.key)
      );
    } else {
      setCurrentScore(0);
      resetAvailableCards();
    }
  }

  function resetAvailableCards() {
    setAvailableCards(picArray.map((i) => i.id));
  }

  function cardAvailable(e) {
    const key = e.currentTarget.dataset.key;
    return availableCards.includes(key);
  }

  function shuffleArray(arr) {
    const a = [...arr];
    for (let i = 0; i < a.length; i++) {
      let j = Math.floor(Math.random() * i);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function updateScore() {
    setCurrentScore(currentScore + 1);
  }

  function updateBest() {
    if (currentScore === bestScore) {
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
