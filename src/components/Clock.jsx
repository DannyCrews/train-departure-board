import React, { Component } from 'react';
import Moment from 'moment';
import '../styles/Clock.css';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: this.getMoment()
    };
  }

  componentDidMount() {
    const tick = setInterval(() => {
      this.setState({
        currentDate: this.getMoment()
      });
    }, 1000);

    this.setState({tick});
  }

  componentWillUnmount() {
    clearInterval(this.state.tick);
  }

  getMoment() {
    return new Date();
  }

  render() {
    let time = Moment(this.state.currentDate).format(this.props.format);

    return (
    <div>
      <div>{this.props.label}</div>
      {time}
    </div>
    );
  }
}

Clock.propTypes = {
  label: React.PropTypes.string.isRequired,
  format: React.PropTypes.string.isRequired
};

Clock.defaultProps = {
    label: 'Current Time',
    format: 'h:mm a'
};

export default Clock;
