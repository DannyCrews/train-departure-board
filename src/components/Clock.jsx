import React, { Component } from 'react';
import Moment from 'moment';

import '../Clock.css';

class Clock extends Component {

render() {
    var date = Moment().format('HH:MM A')
    return (
    <div className='clock'>
      <div>CURRENT TIME</div>
      <div>{date}</div>
    </div>
    );
  }

}


export default Clock;
