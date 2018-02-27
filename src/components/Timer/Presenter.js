import React, { Component } from 'react';
import './Timer.css';
// import Button from '../Button' 
import FaPlayCircleO from 'react-icons/lib/fa/play-circle-o';
import FaStopCircleO from 'react-icons/lib/fa/stop-circle-o';

class Timer extends Component {
  render() {
    console.log(this.props)
    const { isPlaying, elapsedTime, timerDuration, startTimer, restartTimer} = this.props;
    return (
      <div className="container">
        <p className="number">25:00</p>
        {!isPlaying && <div className="buttonContainer" onClick={this.props.startTimer}><FaPlayCircleO className="button"/></div>}
        {isPlaying && <div className="buttonContainer" onClick={this.props.restartTimer}><FaStopCircleO className="button"/></div>}
      </div>
    );
  }
}

export default Timer;
