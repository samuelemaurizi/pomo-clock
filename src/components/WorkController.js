import React, { Component } from 'react';

export default class WorkController extends Component {
  handleWorkIncrement = () => {
    this.props.incremetWorkTime();
  };

  handleWorkDecrement = () => {
    this.props.decrementWorkTime();
  };

  render() {
    return (
      <div className='controller'>
        <h4>Session</h4>
        <button onClick={this.handleWorkIncrement}> + </button>
        <span className='controller-txt'>{this.props.workTime}</span>
        <button onClick={this.handleWorkDecrement}> - </button>
      </div>
    );
  }
}
