import React from "react";
import Cell from "./Cell";
import Controls from "../common/Controls";
import Header from "../common/Header";
import { initialState } from "../../constants";
import { createCombination, checkIsEndGame, isWinnerExists } from "../../utils";

export default class Board extends React.Component {
  state = initialState;

  resetGame() {
    this.setState(initialState);
  }

  handleClick(e, index) {
    const { cells, isXNext } = this.state;
    let newCells = [...cells];
    newCells[index] = isXNext ? true : false;
    let comb = createCombination(isXNext, newCells);
    if (isWinnerExists(comb)) {
      this.setState({ isEndGame: true, winner: !isXNext });
    } else if (checkIsEndGame(newCells)) {
      this.setState({ isEndGame: true });
    }
    this.setState((pr) => ({ isXNext: !pr.isXNext, cells: newCells }));
  }

  randomMove() {
    const { cells } = this.state;
    const emptyCellIndex = cells.findIndex((i) => i === null);
    this.handleClick({}, emptyCellIndex);
  }

  render() {
    const { isXNext, cells, isEndGame, winner } = this.state;
    console.log(this.state);
    return (
      <div>
        <Header isEndGame={isEndGame} winner={winner} isXNext={isXNext} />
        <div className={(isEndGame ? "disabled" : "") + " board"}>
          {cells.map((i, index) => (
            <Cell
              key={index}
              value={cells[index]}
              onClick={(e) => this.handleClick(e, index)}
            />
          ))}
        </div>

        <Controls
          handleReset={() => this.resetGame()}
          handleAi={() => this.randomMove()}
          isEndGame={isEndGame}
        />
      </div>
    );
  }
}
