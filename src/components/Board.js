import React from 'react';
import Cell from './Cell';

const winningCombs = [7, 56, 448, 73, 146, 292, 271, 84];

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      scoreX: 0,
      scoreO: 0,
      isEndGame: false,
      isXNext: true,
      cells: Array(9).fill(null),
    };
  }

  isWinningCombs() {}

  checkGame(scores) {
    console.log(this.state.cells);
    if (winningCombs.includes(scores)) alert('endGame');
    let isEndGame = !this.state.cells.includes(null);
    if (isEndGame) this.setState({ isEndGame });
  }

  handleClick(e, index) {
    let { cells, isXNext, scoreX, scoreO } = this.state;
    let newScores = {};
    if (isXNext) {
      newScores.scoreX = scoreX + 2 ** index;
    } else {
      newScores.scoreO = scoreO + 2 ** index;
    }
    this.setState((pr) => ({ isXNext: !pr.isXNext }));
    let newCells = [...cells];
    newCells[index] = isXNext ? true : false;
    this.setState({ cells: newCells, ...newScores }, () => {
      if (this.state.isXNext) {
        this.checkGame(this.state.scoreO);
      } else {
        this.checkGame(this.state.scoreX);
      }
    });
  }

  render() {
    const { isXNext, cells, isEndGame } = this.state;
    return (
      <div>
        {isEndGame ? (
          <h3>EndGame</h3>
        ) : (
          <h3>Current turn: {isXNext ? 'X' : '0'}</h3>
        )}

        <div className="board">
          {cells.map((i, index) => (
            <Cell
              key={index}
              value={cells[index]}
              onClick={(e) => this.handleClick(e, index)}
            />
          ))}
        </div>
      </div>
    );
  }
}
