import React, { Component } from "react";
import PropTypes from "prop-types";
import UserInfo from "../Components/UserInfo";
import fetchData from "../Api/api";
import "../Styles/UserPerformance.css";

export class UserPerformance extends Component {
  constructor(props) {
    super(props); //Call the constructor of the parent class
    //set the state of the component to an empty object
    const { endpoint } = this.props; //get the endpoint from the props;
    // user is passed as a prop from the parent component
    // this.user = props.user;
    const { user } = this.props;
    this.user = this.props.user;
    this.state = {
      items: {}, // an empty object to store the data fetched from the API
      loading: false, //because we are not requesting data from the api yet
      error: null, // error: {message: ""},  if there is an error, it will be stored here
    };
  }

  componentDidMount() {
    fetchData((this.user = "18")).then((response) => {
      this.setState({
        items: response.data.keyData,
        loading: false,
      });
    });
  }
  render() {
    return (
      <div className='infoCards'>
        <UserInfo
          user={this.user}
          data={this.state.items.calorieCount}
          unit='kCal'
          count='calorieCount'
        />
        <UserInfo
          user={this.user}
          data={this.state.items.proteinCount}
          unit='g'
          count='proteinCount'
        />
        <UserInfo
          user={this.user}
          data={this.state.items.carbohydrateCount}
          unit='g'
          count='carbohydrateCount'
        />
        <UserInfo
          user={this.user}
          data={this.state.items.lipidCount}
          unit='g'
          count='lipidCount'
        />
      </div>
    );
  }
}

UserPerformance.propTypes = {
  user: PropTypes.string.isRequired,
};

export default UserPerformance;
