import React, { Component } from "react";
import "../Styles/Greeting.css";

export class Greeting extends Component {
  render() {
    return (
      <div className='greeting'>
        <h1 className='greeting__text'>
          Hello <span className='greeting__text--name'>{this.props.name}</span>
        </h1>
        <p className='greeting__status'>
          Congratulations! You reached yesterday’s goal! 👏
        </p>
      </div>
    );
  }
}

export default Greeting;
