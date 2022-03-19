import React from 'react';

const Greeting = props => <p>Hello {props.name}!</p>

const App = props => (
  <div>
    <h1>My App</h1>
    <br />
    <Greeting name="Hideo Kojima" />
  </div>
)

export default App;