import React, { Component } from 'react';
import Moment from 'moment';

import '../DateDisplay.css';

class DateDisplay extends Component {

render() {
    var day = Moment().format('dddd')
    var date = Moment().format('D-M-YYYY')
    return (
    <div className="date">
      <div>{day}</div>
      <div>{date}</div>
    </div>
    );
  }

}


export default DateDisplay;
