import React, { Component } from "react";
import SideBar from "./SideBar";
import DailyActivity from "../Components/DailyActivity";
import Greeting from "../Components/Greeting";
import "../Styles/Dashboard.css";
import UserPerformance from "./UserPerformance";
import ChartLine from "../Components/ AverageLineChart";
import UserCharts from "./UserCharts";

export class Dashboard extends Component {
  render() {
    return (
      <main className='main'>
        <Greeting />
        <div className='main__content'>
          <DailyActivity />
          <UserPerformance user={this.user} />
          {/* <ChartLine /> */}
          <UserCharts />
        </div>
      </main>
    );
  }
}

export default Dashboard;
