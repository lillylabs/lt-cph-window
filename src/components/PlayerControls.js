import React, { Component } from 'react'

const style = {
  root: {
    display: 'flex',
    margin: 0,
    fontSize: '2em',
  },
  input: {
    display: 'block',
    width: '4em',
    flexGrow: 0,
    textAlign: 'center',
    background: '#333',
    color: 'white',
    border: 'none',
    borderRadius: 5,
  },
  button: {
    display: 'block',
    fontSize: '1em',
    width: '2em',
    height: '2em',
    background: '#333',
    color: 'white',
    border: 'none',
    borderRadius: 5,
    marginLeft: '0.3em',
  },
  buttonInvalid: {
    color: 'gray',
  },
}

const defaultState = {
  input: '',
}

class PlayerControls extends Component {
  state = defaultState
  inputElement = React.createRef()
  buttonElement = React.createRef()

  componentDidMount() {
    const { selectedKey } = this.props

    if (selectedKey) {
      this.setState({
        input: selectedKey,
      })
      this.focusOnButton()
    } else {
      this.focusOnInput()
    }
  }

  onSubmit = event => {
    event.preventDefault()
    const { input } = this.state
    const { play, pause, navigate, selectedKey } = this.props

    if (this.isPlaying() && input === selectedKey) {
      pause()
    } else if (this.isValidInput(input)) {
      play(input)
      if (input !== selectedKey) {
        navigate(input)
      }
    } else {
      this.focusOnInput()
    }
  }

  onChange = event => {
    this.setState({
      input: event.target.value,
    })
  }

  focusOnInput = () => {
    this.inputElement.current.focus()
    this.inputElement.current.select()
  }

  focusOnButton = () => {
    this.buttonElement.current.focus()
  }

  isValidInput = () => {
    const { input } = this.state
    const { isValidAudioFileKey } = this.props

    return isValidAudioFileKey(input)
  }

  isPlaying = () => {
    const { isPlaying } = this.props
    return isPlaying()
  }

  render() {
    const playIcon = '&#9658'
    const stopIcon = '&#9724'

    const buttonIcon = this.isPlaying() ? stopIcon : playIcon
    const buttonStyle = this.isValidInput()
      ? style.button
      : {
          ...style.button,
          ...style.buttonInvalid,
        }

    return (
      <form style={style.root} onSubmit={this.onSubmit}>
        <input
          style={style.input}
          ref={this.inputElement}
          pattern="[0-9]*"
          type="text"
          disabled={this.isPlaying()}
          value={this.state.input}
          onChange={this.onChange}
        />
        <button
          style={buttonStyle}
          ref={this.buttonElement}
          type="submit"
          dangerouslySetInnerHTML={{
            __html: buttonIcon,
          }}
        />
      </form>
    )
  }
}

export default PlayerControls
