import React from 'react'
import { Link } from 'react-router-dom'
import '../css/addPlayers.css'

const AddPlayers = props => {


  return (
    <div className="main-container">
      <div className="add-container">
        <div className="back"><Link className="back" to="/">X</Link></div>
        <div className="title">{ props.title }</div>
        <form onSubmit={ props.handleSubmit }>
          <input
            className="input-p1"
            type="text"
            name="playerOne"
            placeholder={ props.playerOne }
            onChange={ props.handleChange }
          />
          <input
            className="input-p2"
            type="text"
            name="playerTwo"
            placeholder={ props.playerTwo }
            onChange={ props.handleChange }
          />
          <Link className="back" to="/">
            <input
              className="submit-btn"
              type="submit"
              value="Submit Players"
            />
          </Link>
        </form>
      </div>
    </div>
  )
}

export default AddPlayers

// <Link className="submit-link" to="/">
// </Link>
