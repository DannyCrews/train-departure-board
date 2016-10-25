import React, { Component } from 'react';
import './styles/App.css';
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
        <main className="App-content">
          {this.renderContent()}
        </main>
      </div>
    );
  }
}

export default App;
