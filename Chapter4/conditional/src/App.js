import React, { Component } from 'react';
import LifecycleTest from './LifecycleTest';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello Conditional
          {false && <LifecycleTest/>}
      </div>
    )
  }
}

export default App;