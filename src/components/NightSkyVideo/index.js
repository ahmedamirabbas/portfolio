import React from 'react'
import NightSkyVid from '../../assets/videos/night-sky.mp4'

function setVolume(volume) {
  const videoElement = document.getElementById('video')
  videoElement.volume = volume
}

function NightSkyVideo() {
  const volume = 0.2

  return (
    <video onLoadedMetadata={() => setVolume(volume)} id="video" autoPlay loop>
      <source src={NightSkyVid} type="video/mp4" />
      Video format not supported
    </video>
  )
}

export default NightSkyVideo
