import React, { Component } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import BarChartAxis from "./BarChartAxis";
import "../Styles/DailyActivity.css";
import UserPerformance from "../Pages/UserPerformance";

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
        <BarChartAxis user={12} endpoint='activity' />
      </div>
    );
  }
}
