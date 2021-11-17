import "./App.css";
import React, { Component } from "react";
import Header from "./Pages/Header";
import SideBar from "./Pages/SideBar";
import Greeting from "./Components/Greeting";
import Dashboard from "./Pages/Dashboard";
import fetchData from "./Api/api";

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
    const { endpoint } = this.props;
    const { user } = this.props;
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
