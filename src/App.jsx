import React, { Component } from 'react';
import './App.css';
import StatusBoard from './components/StatusBoard';

class App extends Component {

  renderContent() {
    return (
      <span>
      <StatusBoard/>
      </span>
    );
  }

  render() {
    return (
      <div className="App">
        Application
        <main className="App-content">
          {this.renderContent()}
        </main>
      </div>
    );
  }
}

export default App;
