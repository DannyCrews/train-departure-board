import React, { Component } from 'react';
import Griddle from 'griddle-react';

import departures from '../../data/Departures.json';

class Departures extends Component {

  render() {
    return (
      <div className="Departures">
        <h1>Station Departure Information</h1>
        <Griddle results={departures} />
      </div>
    );
  }

}


export default Departures;
