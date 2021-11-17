import "./App.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./Pages/Header";
import SideBar from "./Pages/SideBar";

import Dashboard from "./Pages/Dashboard";
import fetchData from "./Api/api";

/**
 * @class App // App is the main component of the application which is rendered in the index.html file and contains the Header and SideBar components.
 * @extends {Component} // App is a subclass of Component.
 * @param {object} props // props is an object that contains the properties of the App component.
 * @param {object} state // state is an object that contains the state of the App component.
 * @returns {Component} // returns an object that contains the App component.
 */

export class App extends Component {
  constructor(props) {
    super(props);

    this.endpoint = this.props.endpoint;
    this.user = this.props.user;
    this.state = {
      items: {},
      loading: false,
      error: null,
    };
  }
  componentDidMount() {
    fetchData(this.user, this.endpoint).then((response) => {
      this.setState({
        items: response.data,
        loading: false,
      });
    });
  }
  render() {
    const { error, isLoaded, data } = this.state;
    return (
      <div className='App'>
        <Header user={this.user} />
        <SideBar />
        <Dashboard user={this.user} />
      </div>
    );
  }
}

export default App;

App.propTypes = {
  user: PropTypes.string.isRequired,
};
