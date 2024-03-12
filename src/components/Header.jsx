export default function Header({ currentScore, bestScore }) {
  return (
    <header>
      <div className="left">
        <h1>Memory Game</h1>
        <span>
          Get points by clicking on images, but don&apos;t click the same one
          twice! See if you can get all 12!
        </span>
      </div>
      <div className="right">
        <p className="currentScore">Current Score: {currentScore}</p>
        <p className="bestScore">Best Score: {bestScore}</p>
      </div>
    </header>
  );
}
