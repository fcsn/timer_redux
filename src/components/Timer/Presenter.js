import React, { Component } from 'react';
import './Timer.css';
import Button from '../Button' 

class Timer extends Component {
  render() {
      console.log(this.props);
    return (
      <div className="container">
        <p className="number">25:00</p>
        <Button onClick={()=>console.log('it works')}
        />
      </div>
    );
  }
}

export default Timer;
