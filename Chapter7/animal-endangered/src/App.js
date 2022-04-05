import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return <Animal name="Tiger" number={3890} endangered={true} />;
  }
}

// Class-based component
class Animal extends Component {
  render() {
    const { name, number, endangered } = this.props;
    return  (
      <div>
      <p>Animal: {name}</p>
      <p>Number: {number}</p>
      <p>Endangered: {endangered ? 'Yes' : 'No'}</p>
      </div>
    );
  };
};

// // Functional component
// const Animal = props => {
//   return (
//     <div>
//       <p>Animal: {props.name}</p>
//       <p>Number: {props.number}</p>
//       <p>Endangered: {props.endangered ? 'Yes': 'No'}</p>
//     </div>
//   );
// };


export default App;