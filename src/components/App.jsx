import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
export default function App() {
  return (
    <>
      <Header />
      <Main />
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
