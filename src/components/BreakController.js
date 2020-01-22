import React, { Component } from 'react';

export default class BreakController extends Component {
  handleBreakTimeIncrement = () => {
    this.props.incrementBreakTime();
  };

  handleBreakTimeDecrement = () => {
    this.props.decrementBreakTime();
  };

  render() {
    return (
      <div className='controller'>
        <h4>Break</h4>
        <button onClick={this.handleBreakTimeIncrement}> + </button>
        <span className='controller-txt'>{this.props.breakTime}</span>
        <button onClick={this.handleBreakTimeDecrement}> - </button>
      </div>
    );
  }
}
