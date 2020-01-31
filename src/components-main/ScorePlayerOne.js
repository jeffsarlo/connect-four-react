import React from 'react'
import '../css/scoreboard.css'

const ScorePlayerOne = (props) => {
  return (

    <div className="scoreboard-container">
      <div className="scoreboard">
        <div className="player-one">{ props.title }</div>
        <div className="player-one-wins">{ props.wins }</div>
      </div>
    </div>
  )
}

export default ScorePlayerOne
