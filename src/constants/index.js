// const winningCombs = [7, 56, 448, 73, 146, 292, 271, 84];
export const winningCombs = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export const initialState = {
  isEndGame: false,
  isXNext: true,
  cells: Array(9).fill(null),
  winner: null
};
