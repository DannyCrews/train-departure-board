import axios from 'axios';

function getDepartureData() {
  return axios.get('http://developer.mbta.com/lib/gtrtfs/Departures.csv')
  .then(function(result) {
    console.log(result)
  });
}




export default getDepartureData();
