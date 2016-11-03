This React application displays train departure information derived from a .csv data file. Date/Time formatting is performed using the moment.js library and the data table utilizes griddle-react.

The next steps are to import the .csv data from the source in real time.

Update 11/3 - TODO - set up create-react-app so that webpack proxies the call to the csv data file to mitigate CORS issue.

The application was scaffolded with create-react-app. I ejected the create-react-app build to allow access to the webpack.config file and added the loaders necessary to handle the csv to json file processing.




### `npm start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Runs the test watcher in an interactive mode.  
By default, runs tests related to files changes since the last commit.

[Read more about testing.](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
