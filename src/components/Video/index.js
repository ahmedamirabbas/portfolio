import React from 'react'
import video from './skills.mp4'

function Video() {
  return (
    <video autoPlay muted loop>
      <source src={video} type="video/mp4" />
      Video format not supported
    </video>
  )
}

export default Video
