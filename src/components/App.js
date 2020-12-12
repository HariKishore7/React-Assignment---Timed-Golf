import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0, onStart: false };
    this.startGame = this.startGame.bind(this);
    this.timerInterval = null;
    this.keyListner = this.keyListner.bind(this);

  }

  keyListner(evt) {
    if (this.state.onStart) {
      if (evt.keyCode === 37) {
        this.setState({ x: this.state.x - 5 });
      }
      else if (evt.keyCode === 38) {
        this.setState({ y: this.state.y - 5 });
      }
      else if (evt.keyCode === 39) {
        this.setState({ x: this.state.x + 5 });
      }
      else if (evt.keyCode === 40) {
        this.setState({ y: this.state.y + 5 });
      }

    }
  }


  componentDidMount() {

  }
  componentDidUpdate() {
    if (this.state.x === 250 && this.state.y === 250) {
      clearInterval(this.timerInterval);
      document.removeEventListener("keydown", this.keyListner);
    }
  }

  componentWillUnmount() {

  }

  startGame() {
    this.setState({ onStart: true });
    this.timerInterval = setInterval(() => {
      this.setState({ time: this.state.time + 1 })

    }, 1 * 1000);
    document.addEventListener("keydown", this.keyListner);
  }


  render() {
    return (
      <>



        {!this.state.onStart ? (<button className="start" onClick={this.startGame}>Start</button>)
          : <><div className="ball" style={{ left: this.state.x + "px", top: this.state.y + "px" }}></div>
            <div className="hole"></div>
            <div className="heading-timer">{this.state.time}</div>

          </>}
      </>


    )
  }
}

export default Timer;