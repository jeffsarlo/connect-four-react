import React from 'react'
import '../css/videoScreen.css'

const VideoScreen = (props) => {
  return (
    <div className="video-screen-container">
      <div className="video-screen-border">
        <div className="display">{ props.title }</div>
      </div>
    </div>
  )
}

export default VideoScreen
