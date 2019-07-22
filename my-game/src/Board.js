import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Square from './Square';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      isNextTurn: true
    }
  }

  handleClick = (i) => {
    const squares = this.state.squares.slice();
    squares[i] = this.state.isNextTurn ? "X" : "O";
    // if (this.calculateWinnder(squares) && squares[i]) {
    //   return false;
    // }
    this.setState({
      squares: squares,
      isNextTurn: !this.state.isNextTurn
    });

    if (this.calculateWinnder(squares) && squares[i]) {
        return false;
    }
  }

  renderSquare(i) {
    return (<Square 
      value={this.state.squares[i]} 
      onClick={() => this.handleClick(i)}
      />);
  }

  calculateWinnder(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (var i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return false;
  }

  render() {
    var status = "";
    const winner = this.calculateWinnder(this.state.squares);
    if (winner) {
      status = 'The Winner is player: ' + winner;
    }
    else {
      status = 'Next player: ' + (this.state.isNextTurn ? 'X' : 'O');
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
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