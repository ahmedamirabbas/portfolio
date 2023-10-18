import React from 'react'
import RiverVideo from '../../assets/videos/river-loop.mp4'

function setVolume(volume) {
  const videoElement = document.getElementById('video')
  videoElement.volume = volume
}

function RiverVid() {
  const volume = 0.2

  return (
    <video onLoadedMetadata={() => setVolume(volume)} id="video" autoPlay loop>
      <source src={RiverVideo} type="video/mp4" />
      Video format not supported
    </video>
  )
}

export default RiverVid
