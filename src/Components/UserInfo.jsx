import React, { Component } from "react";
import PropTypes from "prop-types";
// change name of the images in alias of keys of the count
import "../Styles/UserInfo.css";
import calorieCount from "../Assets/calories_icon.png";
import proteinCount from "../Assets/carbs_icon.png";
import carbohydrateCount from "../Assets/cheeseburger.png";
import lipidCount from "../Assets/protein_icon.png";

export class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
    this.count = this.props.count; //keyData of the calories, proteins, carbs, lipids
    this.data = this.props.data; //values of the calories, proteins, carbs, lipids
    this.unit = this.props.unit; //unit of the calories, proteins, carbs, lipids
    this.images = {
      calorieCount,
      proteinCount,
      carbohydrateCount,
      lipidCount,
    };
  }
  render() {
    return (
      <div className='user-info'>
        <img src={this.images[this.count]} alt='' className='user__image' />

        <div className='user__text'>
          <p className='user__text-status'>
            {this.props.data}
            {this.props.unit}
          </p>
          <p className='user__text-category'>
            {this.count === "calorieCount"
              ? "Calories"
              : this.count === "proteinCount"
              ? "Proteins"
              : this.count === "carbohydrateCount"
              ? "Carbs"
              : "Lipids"}
          </p>
        </div>
      </div>
    );
  }
}
UserInfo.propTypes = {
  user: PropTypes.string,
  count: PropTypes.string,
  data: PropTypes.number,
};
export default UserInfo;
