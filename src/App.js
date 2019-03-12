import React, { Component } from 'react';
import { Input } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input value={'Hello!'} />
      </div>
    );
  }
}

export default App;
