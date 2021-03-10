/**
 * Преобразует массив игрового поля в комбинацию текущего игрока
 * @param {boolean} useX
 * @param {array} allCells
 * @returns array
 */
export const createCombination = (useX, allCells) => {
  let comb = [];
  allCells.forEach((item, index) => {
    if (useX) {
      if (item) comb.push(index);
    } else {
      if (item === false) comb.push(index);
    }
  });
  return comb;
};
