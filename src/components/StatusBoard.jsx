import React, { Component } from 'react';
import Moment from 'moment';
import '../styles/StatusBoard.css';
import Clock from './Clock';
import Departures from './Departures';

class StatusBoard extends Component {

  render() {
    let day = Moment().format('dddd');

    return (
      <div className="App">
        <div className="date">
          <Clock format='D-M-YYYY' label={day}/>
        </div>
        <div className="clock">
          <Clock format='h:mm:ss a' label='Current Time'/>
        </div>
        <div className="departures">
          <Departures />
        </div>
      </div>
    );
  }

}


export default StatusBoard;
