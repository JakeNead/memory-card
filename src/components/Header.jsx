export default function Header({ currentScore, bestScore }) {
  return (
    <header>
      <div className="headerContainer">
        <div className="left">
          <h1>Memory Game</h1>
          <span>
            Don&apos;t click the same photo twice... See if you can get all 12!
          </span>
        </div>
        <div className="right">
          <p className="currentScore">Current Score: {currentScore}</p>
          <p className="bestScore">Best Score: {bestScore}</p>
        </div>
      </div>
    </header>
  );
}
