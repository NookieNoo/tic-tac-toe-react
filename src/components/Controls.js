export default function Controls({ handleReset, handleAi, isEndGame }) {
  return (
    <div className="controls">
      <button onClick={handleReset}>New game</button>
      <button onClick={handleAi} className={isEndGame ? "disabled" : ""}>
        Random move
      </button>
    </div>
  );
}
