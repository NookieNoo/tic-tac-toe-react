import React, { useState } from "react";
import Cell from "./Cell";
import Controls from "../common/Controls";
import Header from "../common/Header";
import { initialState } from "../../constants";
import { createCombination, checkIsEndGame, isWinnerExists } from "../../utils";

export default function Board(props) {
  const [state, setState] = useState(initialState);
  const { isXNext, cells, isEndGame, winner } = state;

  const resetGame = () => setState(initialState);

  const handleClick = (e, index) => {
    const { cells, isXNext } = state;
    let newCells = [...cells];
    newCells[index] = isXNext ? true : false;
    let comb = createCombination(isXNext, newCells);
    let toUpdate = {};
    if (isWinnerExists(comb)) {
      toUpdate.isEndGame = true;
      toUpdate.winner = !isXNext;
    } else if (checkIsEndGame(newCells)) {
      toUpdate.isEndGame = true;
    }
    setState((pr) => {
      return {
        ...pr,
        ...toUpdate,
        isXNext: !pr.isXNext,
        cells: newCells
      };
    });
  };

  const randomMove = () => {
    const { cells } = state;
    const emptyCellIndex = cells.findIndex((i) => i === null);
    handleClick({}, emptyCellIndex);
  };

  return (
    <div>
      <Header isEndGame={isEndGame} winner={winner} isXNext={isXNext} />
      <div className={(isEndGame ? "disabled" : "") + " board"}>
        {cells.map((i, index) => (
          <Cell
            key={index}
            value={cells[index]}
            onClick={(e) => handleClick(e, index)}
          />
        ))}
      </div>

      <Controls
        handleReset={resetGame}
        handleAi={randomMove}
        isEndGame={isEndGame}
      />
    </div>
  );
}
