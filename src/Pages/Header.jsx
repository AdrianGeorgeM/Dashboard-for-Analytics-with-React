import React, { Component } from "react";
import logo from "../Assets/logo.svg";
import "../Styles/Header.css";

/**
 * Header component and it renders the nav element
 * @class Header
 * @extends {Component}
 * @returns {JSX} Header component with nav element and logo image element
 *
 */
export class Header extends Component {
  render() {
    return (
      <header className='header'>
        <img src={logo} alt='logo' className='header__logo' />
        <nav>
          <ul>
            <li>Home</li>
            <li>Profile</li>
            <li>Settings</li>
            <li>Community</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
