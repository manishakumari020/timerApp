import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimeRunning: false, timeChangeInSecond: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onClickReset = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false, timeChangeInSecond: 0})
  }

  onClickStop = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeChangeInSecond: prevState.timeChangeInSecond + 1,
    }))
  }

  onClickStart = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimeRunning: true})
  }

  renderSeconds = () => {
    const {timeChangeInSecond} = this.state
    const seconds = Math.floor(timeChangeInSecond % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeChangeInSecond} = this.state
    const minutes = Math.floor(timeChangeInSecond / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimeRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="stopwatch-app-container">
        <div className="stopwatch-details">
          <h1 className="stopwatch-heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-details">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
                alt="stopwatch"
                className="timer-image"
              />
              <p className="timer">Timer</p>
            </div>
            <h1 className="time">{time}</h1>
            <div className="timer-button-container">
              <button
                type="button"
                className="start-button button"
                onClick={this.onClickStart}
                disabled={isTimeRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button button"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button button"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
