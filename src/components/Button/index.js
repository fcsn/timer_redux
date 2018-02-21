import React, { Component } from 'react';
import FaPlayCircleO from 'react-icons/lib/fa/play-circle-o';
import FaStopCircleO from 'react-icons/lib/fa/stop-circle-o';
import './Button.css'

class Button extends Component {

  render() {
    return (
      <div>
       <div className="buttonContainer" onClick={this.props.onClick}><FaPlayCircleO className="button"/></div>
       <div className="buttonContainer" onClick={this.props.onClick}><FaStopCircleO className="button"/></div>
      </div>
    );
  }
}

export default Button;