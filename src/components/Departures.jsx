import React, { Component } from 'react';
import Griddle from 'griddle-react';
import '../styles/Departures.css';
import TimeTransform from './TimeTransform';
import departures from '../../data/Departures.json';

class Departures extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // get data from mbta data feed
  }


  render() {
    let departureMetadata = [
      {
        "columnName": "Origin",
        "displayName": "Station",
        "cssClassName": "station-column"
      },
      {
        "columnName": "Trip",
        "displayName": "Train",
        "cssClassName": "train-column"
      },
      {
        "columnName": "ScheduledTime",
        "displayName": "Time",
        "cssClassName": "time-column",
        "customComponent": TimeTransform
      },
      {
        "columnName": "Destination",
        "cssClassName": "destination-column"
      },
      {
        "columnName": "Track",
        "cssClassName": "track-column"
      },
      {
        "columnName": "Status",
        "cssClassName": "status-column"
      }
      ];

    return (
      <div className="Departures">
        <h1>Station Departure Information</h1>
        <Griddle
          results={departures}
          enableInfiniteScroll={true}
          bodyHeight={1000}
          columns={["Origin", "ScheduledTime", "Trip", "Destination", "Track", "Status"]}
          columnMetadata={departureMetadata} />
      </div>
    );
  }
}


export default Departures;
