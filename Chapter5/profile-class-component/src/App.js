import React from "react";
import './App.css';
import Profile from "./Profile";

const user = {
  name: "Rena",
  interests: "Reading, Swimming, Modeling",
  age: 33,
  image: "https://pyxis.nymag.com/v1/imgs/c1d/d59/2246c9b7d304ac92a913920d0f6de7fbe6-15-constance-wu.rsquare.w330.jpg",
  color: "Red",
  book: "The Alchemist"
};

function App() {
  return (
    <div className="App">
      <Profile user={user}/>
    </div>
  );
}

export default App;