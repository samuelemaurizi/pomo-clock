import React, { Component } from 'react';
import '../styles/App.css';

import Timer from './Timer';
import TimerController from './TimerController';

class App extends Component {
  constructor() {
    super();
    this.state = {
      timerId: 0,
      timerRunning: false,
      currentTime: '25 : 00',
      cycle: 'Session',
      workTime: 25,
      breakTime: 5
    };
  }

  incremetWorkTime = () => {
    this.setState({
      workTime: this.state.workTime + 1
    });
  };

  decrementWorkTime = () => {
    this.setState({
      workTime: this.state.workTime - 1
    });
  };

  incrementBreakTime = () => {
    this.setState({
      breakTime: this.state.breakTime + 1
    });
  };

  decrementBreakTime = () => {
    this.setState({
      breakTime: this.state.breakTime - 1
    });
  };

  render() {
    return (
      <div className='main'>
        <h1 className='title'>Pomodoro Clock</h1>
        <div className='circle'>
          <Timer
            timer={this.state.workTime}
            cycle={this.state.cycle}
            startCountDown={this.startCountDown}
          />
        </div>
        <TimerController
          workTime={this.state.workTime}
          breakTime={this.state.breakTime}
          incremetWorkTime={this.incremetWorkTime}
          decrementWorkTime={this.decrementWorkTime}
          incrementBreakTime={this.incrementBreakTime}
          decrementBreakTime={this.decrementBreakTime}
        />
      </div>
    );
  }
}

export default App;
