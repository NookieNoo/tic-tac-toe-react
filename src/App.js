import Board from "./components/classes/Board";
import BoardF from "./components/functional/Board";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="App">
        <Board />
      </div>
      <div className="App">
        <BoardF />
      </div>
    </>
  );
}
