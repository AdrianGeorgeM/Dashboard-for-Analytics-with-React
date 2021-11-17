import React, { Component } from "react";
import PropTypes from "prop-types";
import DailyActivity from "../Components/DailyActivity";
import Greeting from "../Components/Greeting";
import "../Styles/Dashboard.css";
import UserPerformance from "./UserPerformance";

import UserCharts from "./UserCharts";
/**
 * @class Dashboard
 * @extends {Component}
 * @description Dashboard page
 * @param {object} props
 * @param {object} props.user
 *
 */
export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
  }

  render() {
    return (
      <main className='main'>
        <Greeting user={this.user} />
        <div className='main__content'>
          <DailyActivity user={this.user} />
          <UserPerformance user={this.user} />
          {/* <ChartLine /> */}
          <UserCharts user={this.user} />
        </div>
      </main>
    );
  }
}

export default Dashboard;
Dashboard.propTypes = {
  user: PropTypes.string.isRequired,
};
