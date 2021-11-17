import React, { Component } from "react";
import "../Styles/Greeting.css";
import fetchData from "../Api/api";
import PropTypes from "prop-types";

/**
 * @description - Greeting component
 * @param {object} props - Greeting component props
 * @returns {JSX} - JSX representation of Greeting component
 */
export class Greeting extends Component {
  constructor(props) {
    super(props);

    // const { endpoint } = this.props;
    // const { user } = this.props;
    this.endpoint = this.props.endpoint;
    this.user = this.props.user;
    this.state = {
      items: {},
      loading: false,
      error: null,
    };
  }
  componentDidMount() {
    // const { endpoint } = this.props; //get the endpoint from the props;
    // const { user } = this.props; // user is passed as a prop from the parent component
    fetchData(this.user, this.endpoint).then((response) => {
      this.setState({
        items: response.data.userInfos,
        loading: false,
      });
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
Greeting.propTypes = {
  user: PropTypes.string.isRequired,
};
