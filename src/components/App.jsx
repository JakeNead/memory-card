import { useState } from "react";
export default App;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Memory Game</h1>
      <span>
        Get points by clicking on images, but don&apos;t click the same one
        twice! See if you can get all 12!
      </span>
    </>
  );
}

// set up header, main, footer components

// useEffect in main for downloading images
//    updates the images container
//    updates the availableCardsArray
//    returns cleanup to empty images container an availableCardsArray
//    empty dependency array to run once on mount

// handleOnClick will
//    if pic is in availableCardsArray
//        pop that card from the array
//        check current/best score state to update
//    shuffle the images conainer
