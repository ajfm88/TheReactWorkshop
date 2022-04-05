import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return <Animal name="Tiger" number={3890} endangered={true} />;
  }
}

// Class-based component
// class Animal extends Component {
//   render() {
//     return  (
//       <div>
//       <p>Animal: {this.props.name}</p>
//       <p>Number: {this.props.number}</p>
//       <p>Endangered: {this.props.endangered ? 'Yes' : 'No'}</p>
//       </div>
//     );
//   };
// };

// // Functional component
const Animal = props => {
  return (
    <div>
      <p>Animal: {props.name}</p>
      <p>Number: {props.number}</p>
      <p>Endangered: {props.endangered ? 'Yes': 'No'}</p>
    </div>
  );
};


export default App;