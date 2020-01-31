import React from 'react'
import '../css/gameboard.css'


const Gameboard = (props) => {

  const gameBoard = props.gameBoard

  return (
    <div className="gameboard">
      <div className="board-container">

        {Object.keys(gameBoard).map(keyOuter => {
          return Object.keys(gameBoard[keyOuter]).map(keyInner => {

            const boardIndex = gameBoard[keyOuter][keyInner]
          
            return (
              <div className="box" key={`${keyOuter}${keyInner}`}>
                <div
                  className={ boardIndex.className }
                  onClick={ (e) => props.playerMove(e)}>{`${keyOuter}${keyInner}`}
                </div>
              </div>
            )
          })
        })}

      </div>
    </div>
  )
}

export default Gameboard
