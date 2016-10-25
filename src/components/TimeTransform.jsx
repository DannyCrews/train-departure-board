import React, { Component } from 'react';
import Moment from 'moment-timezone';

class TimeTransform extends Component {

  render() {
    let epochTime = this.props.data;
    let timeVal = Moment.unix(epochTime).tz('America/New_York').format('h:mm a');

    return (
      <span>
        {timeVal}
      </span>
    );
  }

}

export default TimeTransform;
