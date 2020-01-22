import React, { Component } from 'react';

export default class Timer extends Component {
  render() {
    return (
      <div className='timer'>
        <span>{this.props.timer}</span>
        <span>{this.props.cycle}</span>
        <button>Start</button>
      </div>
    );
  }
}
