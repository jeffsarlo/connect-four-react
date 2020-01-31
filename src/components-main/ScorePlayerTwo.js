import React from 'react'
import '../css/scoreboard.css'

const ScorePlayerTwo = (props) => {
  return (

    <div className="scoreboard-container">
      <div className="scoreboard p2">
        <div className="player-two">{ props.title }</div>
        <div className="player-two-wins">{ props.wins }</div>
      </div>
    </div>
  )
}

export default ScorePlayerTwo
