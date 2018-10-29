import React, { Component } from 'react'

class Player extends Component {
  audioElements = {}

  componentDidMount() {
    this.stopAll()
  }

  createAudioRef = (id, element) => {
    this.audioElements[id] = element
  }

  stopAll = () => {
    Object.keys(this.audioElements).forEach(id =>
      this.audioElements[id].pause()
    )
  }

  play = key => {
    this.stopAll()

    this.audioElements[key].currentTime = 0
    this.audioElements[key].play()
  }

  isValidAudioFileKey = key => {
    const { audioFiles } = this.props
    return audioFiles.find(track => track.key === key)
  }

  render() {
    const { audioFiles = [], selectedKey, children } = this.props

    return (
      <>
        {children(this.play, this.isValidAudioFileKey)}

        {audioFiles.map(audioFile => (
          <audio
            key={audioFile.key}
            ref={element => this.createAudioRef(audioFile.key, element)}
            src={audioFile.src}
            controlsList="nodownload"
            controls={selectedKey === audioFile.key}
          />
        ))}
      </>
    )
  }
}

export default Player
