export default function Scoreboard({ currentScore, highestScore }) {
  return (
    <div className="scoreboard-container">
      <div className="current-score">
        <div className="score-number">{currentScore}</div>
        <div className="score-label">Current Score</div>
      </div>
      <div className="highest-score">
        <div className="score-number">{highestScore}</div>
        <div className="score-label">Highest Score</div>
      </div>
    </div>
  );
}
