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
}

const defaultState = {
  input: '',
}

class SelectOne extends Component {
  state = defaultState
  inputElement = React.createRef()

  componentDidMount() {
    this.focusOnInput()
  }

  onSubmit = event => {
    event.preventDefault()
    const { input } = this.state
    const { play, navigate } = this.props

    if (this.isValidInput(input)) {
      play(input)
      navigate(input)
    } else {
      this.focusOnInput()
    }
    // Navigate to audio file page
  }

  onChange = event => {
    this.setState({
      input: event.target.value,
    })
  }

  focusOnInput = () => {
    this.inputElement.current.focus()
    // this.inputElement.current.select()
  }

  isValidInput = () => {
    const { input } = this.state
    const { isValidFileKey } = this.props

    return isValidFileKey(input)
  }

  isPlaying = () => {
    const { playing } = this.state
    return playing
  }

  render() {
    return (
      <form style={style.root} onSubmit={this.onSubmit}>
        <input
          style={style.input}
          ref={this.inputElement}
          pattern="[0-9]*"
          type="text"
          value={this.state.input}
          onChange={this.onChange}
        />
        <button style={style.button} type="submit">
          &#9658;
        </button>
      </form>
    )
  }
}

export default SelectOne
