import React from 'react'
import '../css/sideLights.css'

const LeftLight = (props) => {
  return (
    <div className="winner-light">
      <div className="winner-p1">
        <div className={ props.class }></div>
      </div>
    </div>
  )
}

export default LeftLight
