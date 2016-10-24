import React, { Component } from 'react';
import Moment from 'moment';

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
          <Clock format='hh:mm:ss' label='Current Time'/>
        </div>
        <Departures />
      </div>
    );
  }

}


export default StatusBoard;
