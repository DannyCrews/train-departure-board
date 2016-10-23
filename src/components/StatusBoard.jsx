import React, { Component } from 'react';

import DateDisplay from './DateDisplay';
import Clock from './Clock';
import Departures from './Departures';

class StatusBoard extends Component {

  render() {
    return (
      <div className="App">
        <DateDisplay />
        <Clock />
        <Departures />
      </div>
    );
  }

}


export default StatusBoard;
