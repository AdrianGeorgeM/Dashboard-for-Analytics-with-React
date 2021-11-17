import React, { Component } from "react";
import { LineChart } from "recharts";
import ChartLine from "../Components/ AverageLineChart";
import ChartRadar from "../Components/PerformanceRadarChart";
import ChartRadial from "../Components/ScoreRadialBarChart";
import "../Styles/UserCharts.css";
// A component to display the 3 user's charts

export class UserCharts extends Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
    this.endpoint = this.props.endpoint;
  }
  render() {
    return (
      <div className='user__charts'>
        <div className='chart'>
          <h3 className='lineChart__title'>
            Average speed of <br />
            your sessions
          </h3>
          <ChartLine
            type='lineChart'
            user={this.user}
            endpoint={"average-sessions"}
          />
        </div>
        <div className='chart'>
          <ChartRadar
            type='radarChart'
            user={this.user}
            endpoint={"performance"}
          />
        </div>

        <div className='chart'>
          <h3 className='radialChart__title'>Score</h3>
          <ChartRadial type='radialChart' user={this.user} />
        </div>
      </div>
    );
  }
}

export default UserCharts;
