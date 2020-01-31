import React from 'react'
import '../css/gameButtons.css'

const StartNewButton = (props) => {
  return (
    <div className="game-buttons">
      <div className="btn-border-start">
        <button
          onClick={ (e) => props.handleClick(e) }
          className="btn-start">{ props.title }
        </button>
      </div>
    </div>
  )
}

export default StartNewButton
