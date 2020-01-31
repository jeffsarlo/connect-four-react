import React from 'react'
import { Link } from 'react-router-dom'
import '../css/gameButtons.css'

const PlayerButton = (props) => {
  return (
    <div className="player-button">
      <div className="btn-border-newPlayer">
        <Link to={`/addplayers`} className="link">
          <button
            className="btn-newPlayer">{props.title}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default PlayerButton

// onClick={ (e) => props.handleClick(e) }
