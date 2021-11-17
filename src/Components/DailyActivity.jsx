import React, { Component } from "react";
import PropTypes from "prop-types";

import BarChartAxis from "./BarChartAxis";
import "../Styles/DailyActivity.css";

/**
 * DailyActivity component
 * @extends Component
 * @param {object} props
 * @returns {object} JSX
 * @constructor
 * @class DailyActivity
 *
 */

export default class DailyActivity extends Component {
  constructor(props) {
    super(props);
    this.type = this.props.type;
    this.user = this.props.user;
    this.endpoint = this.props.endpoint;
  }
  render() {
    return (
      <div className='dailyActivity'>
        <h2>Daily activity</h2>
        <BarChartAxis user={this.user} endpoint='activity' />
      </div>
    );
  }
}
DailyActivity.propTypes = {
  user: PropTypes.string.isRequired,
};
