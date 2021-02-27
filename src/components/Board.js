import React from "react";
import Cell from "./Cell";

const cellsNumbers = Array.from(Array(9).keys());

export default class Board extends React.Component {
  render() {
    return (
      <div className='board'>
        <h1>Hello!</h1>
        {cellsNumbers.map(i => <Cell key={i} number={i}/>)}
      </div>
    );
  }
}
