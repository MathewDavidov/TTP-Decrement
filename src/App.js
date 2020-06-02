import React, { Component } from 'react';
import Decrement from "./Decrement"
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Decrement number={5}/>
        <Decrement number={10} />
        <Decrement number={20} />
        <Decrement number={40} />
        <Decrement number={80} />
      </>
    )
  }
}

export default App;
