import "./App.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./Pages/Header";
import SideBar from "./Pages/SideBar";

import Dashboard from "./Pages/Dashboard";
import fetchData from "./Api/api";

// All React components must act like pure functions with respect to their props.
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
      error: "error",
    };
  }
  componentDidMount() {
    fetchData(this.user, this.endpoint).then((response) => {
      this.setState({
        items: response.data,
        loading: true,
        error: "",
      });
    });
  }
  render() {
    const { error, loading } = this.state; // destructuring the state object. data is the data that is returned from the API. error is the error that is returned from the API.  loading is the loading state of the API.
    if (!loading) {
      return <div>Loading</div>;
    } else if (error) {
      return <div>{error.message}</div>;
    } else {
      return (
        <div className='App'>
          <Header user={this.user} />
          <SideBar />
          <Dashboard user={this.user} />
        </div>
      );
    }
  }
}
export default App;

App.propTypes = {
  user: PropTypes.string.isRequired,
};
