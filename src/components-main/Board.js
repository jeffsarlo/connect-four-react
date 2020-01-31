import React from 'react'
import '../css/gameboard.css'


class Board extends React.Component {

  uiBoard = (props) => {
    const { gameBoard } = this.props
    const { playerMove } = this.props

    let board = []

    for (let i = 0; i < 6; i++) {
        board[i] = []
      for (let j = 0; j < 7; j++) {
        board[i].push(
          <div className="box" key={`${i}${j}`}>
            <div
              onClick={ (e) => playerMove(e)}>{`${i}${j}`}
            </div>
          </div>
        )
      }
    }
    return board
  }

  render () {
    return (
      <div className="gameboard">
        <div className="board-container">
          {this.uiBoard()}
        </div>
      </div>
    )
  }
}

export default Board
