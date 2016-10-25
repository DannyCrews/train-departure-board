import fs from 'fs';
import Papa from 'babyparse';

//let file = '../../data/Departures.csv'

let content = fs.readFileSync('../../data/Departures.csv', { encoding: 'binary' });

let jsonFile = Papa.parse(content);

export default jsonFile;
