import React, { Component } from "react";
import "../Styles/Greeting.css";
import fetchData from "../Api/api";

export class Greeting extends Component {
  constructor(props) {
    super(props);

    const { endpoint } = this.props;

    const { user } = this.props;
    this.endpoint = this.props.endpoint;
    this.user = this.props.user;
    this.state = {
      items: {},
      loading: false,
      error: null,
    };
  }
  componentDidMount() {
    const { endpoint } = this.props; //get the endpoint from the props;
    const { user } = this.props; // user is passed as a prop from the parent component
    fetchData(this.user, this.endpoint).then((response) => {
      this.setState({
        items: response.data.userInfos,
        loading: false,
      });
      console.log(response.data.userInfos.firstName);
    });
  }
  render() {
    return (
      <div className='greeting'>
        <h1 className='greeting__text'>
          Hello{" "}
          <span className='greeting__text--name'>
            {this.state.items.firstName}
          </span>
        </h1>
        <p className='greeting__status'>
          Congratulations! You reached yesterday’s goal! 👏
        </p>
      </div>
    );
  }
}

export default Greeting;
