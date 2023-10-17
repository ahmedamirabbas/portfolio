import React from 'react'
import video from './The River Loop Animation_1080p.mp4'

function setVolume(volume) {
  const videoElement = document.getElementById('video')
  videoElement.volume = volume
}

function Video() {
  const volume = 0.2
  return (
    <video onLoadedMetadata={() => setVolume(volume)} id="video" autoPlay loop>
      <source src={video} type="video/mp4" />
      Video format not supported
    </video>
  )
}

export default Video
