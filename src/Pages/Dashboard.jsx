import React, { Component } from "react";
import SideBar from "./SideBar";
import DailyActivity from "../Components/DailyActivity";
import Greeting from "../Components/Greeting";
import "../Styles/Dashboard.css";
import UserPerformance from "./UserPerformance";

export class Dashboard extends Component {
  render() {
    return (
      <main className='main'>
        <Greeting />
        <div className='main__content'>
          <DailyActivity />
          <UserPerformance user={this.user} />
        </div>
      </main>
    );
  }
}

export default Dashboard;
