import React, { Component } from 'react';

import WorkController from './WorkController';
import BreakController from './BreakController';

export default class TimerController extends Component {
  render() {
    return (
      <div className='timer-controller'>
        <WorkController
          workTime={this.props.workTime}
          incremetWorkTime={this.props.incremetWorkTime}
          decrementWorkTime={this.props.decrementWorkTime}
        />
        <BreakController
          breakTime={this.props.breakTime}
          incrementBreakTime={this.props.incrementBreakTime}
          decrementBreakTime={this.props.decrementBreakTime}
        />
      </div>
    );
  }
}
