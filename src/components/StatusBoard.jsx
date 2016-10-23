import React, { Component } from 'react';

import Date from './Date';
import Clock from './Clock';
import Departures from './Departures';

class StatusBoard extends Component {

  render() {
    return (
      <div className="App">
        <Date />
        <Clock />
        <Departures />
      </div>
    );
  }

}


export default StatusBoard;
