import React, { Component } from "react";
import "../Styles/SideBar.css";
import swim from "../Assets/swim.png";
import yoga from "../Assets/yoga.png";
import cycle from "../Assets/cycle.png";
import gym from "../Assets/gym.png";

/**
 * SideBar component
 * @Component
 * @return {Component} - JSX React Component
 */
export class SideBar extends Component {
  render() {
    return (
      <div className='sidebar__container'>
        <div className='sidebar__icons'>
          <a href='#'>
            <img src={yoga} alt='' className='sidebar__icon'></img>
          </a>
          <a href='#'>
            <img src={swim} alt='' className='sidebar__icon'></img>
          </a>
          <a href='#'>
            <img src={cycle} alt='' className='sidebar__icon'></img>
          </a>
          <a href='#'>
            <img src={gym} alt='' className='sidebar__icon'></img>
          </a>
        </div>

        <div className='copyrights'>
          <p className='copyrights__content'>Copyright, SportSee 2021</p>
        </div>
      </div>
    );
  }
}

export default SideBar;
