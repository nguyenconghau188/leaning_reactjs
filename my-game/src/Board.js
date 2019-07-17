import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Square from './Square';


class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(5)}
          {this.renderSquare(4)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}


export default Board;