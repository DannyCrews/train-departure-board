import React from 'react';
import Moment from 'moment';

import '../Clock.css';



class Clock extends React.Component {

  render() {
    var time = Moment(this.props.date).format(this.props.format);

    return (
    <div className="clock">
      <div>Current Time</div>
      {time}
    </div>
    );
  }
}

Clock.propTypes = {
  date: React.PropTypes.object.isRequired,
  format: React.PropTypes.string.isRequired
};

Clock.defaultProps = {
    date: new Date(),
    format: 'HH:MM A'
};

export default Clock;
