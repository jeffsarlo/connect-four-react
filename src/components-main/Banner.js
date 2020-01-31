import React from 'react'
import '../css/banner.css'

const Banner = (props) => {
  return (
    <div className="banner">
      <div className="border"> <span>4</span>
        <div className={ props.class }>
          { props.title } 
        </div>
      </div>
    </div>
  )
}

export default Banner
