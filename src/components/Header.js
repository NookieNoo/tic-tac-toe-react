export default function Header({ isEndGame, winner, isXNext }) {
  return (
    <div className="header">
      {isEndGame ? (
        winner !== null ? (
          <h3>EndGame (Winner: {winner ? "0" : "X"})</h3>
        ) : (
          <h3>EndGame (Winner doesn't exists)</h3>
        )
      ) : (
        <h3>Current move: {isXNext ? "X" : "0"}</h3>
      )}
    </div>
  );
}
