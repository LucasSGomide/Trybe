import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClickA = this.handleClickA.bind(this)
    this.handleClickB = this.handleClickB.bind(this)
    this.handleClickC = this.handleClickC.bind(this)

    this.state = {
      numberOfClicksA: 0,
      numberOfClicksB: 0,
      numberOfClicksC: 0
    }
  }

  handleClickA(event) {
    this.setState((previousState, _props) => ({
      numberOfClicksA: previousState.numberOfClicksA + 1
    }))
    if (this.state.numberOfClicksA % 2 && this.state.numberOfClicksA !== 0) {
      event.target.className = 'buttonEven'
    } else if (this.state.numberOfClicksA % 1 === 0) {
      event.target.className = 'buttonDefault'
    }
  }
  
  handleClickB(event) {
    this.setState((previousState, _props) => ({
      numberOfClicksB: previousState.numberOfClicksB + 1
    }))
    if (this.state.numberOfClicksB % 2 && this.state.numberOfClicksB !== 0) {
      event.target.className = 'buttonEven'
    } else if (this.state.numberOfClicksB % 1 === 0) {
      event.target.className = 'buttonDefault'
    }
  }
  
  handleClickC(event) {
    this.setState((previousState, _props) => ({
      numberOfClicksC: previousState.numberOfClicksC + 1
    }))
    console.log(this.state.numberOfClicksC)
    if (this.state.numberOfClicksC % 2 && this.state.numberOfClicksC !== 0) {
      event.target.className = 'buttonEven'
    } else if (this.state.numberOfClicksC % 1 === 0) {
      event.target.className = 'buttonDefault'
    }
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleClickA}>{this.state.numberOfClicksA}</button>
        <button onClick={this.handleClickB}>{this.state.numberOfClicksB}</button>
        <button onClick={this.handleClickC}>{this.state.numberOfClicksC}</button>
      </div>
    )
  }
}

export default App;