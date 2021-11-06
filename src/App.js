import "./App.css";
import React from "react";
import Header from "./Pages/Header";
import SideBar from "./Pages/SideBar";
import Greeting from "./Components/Greeting";
import Dashboard from "./Pages/Dashboard";

/**
 *
 * @returns {JSX.Element}
 */
function App() {
  return (
    <div className='App'>
      <Header />
      <SideBar />
      <Dashboard />
    </div>
  );
}

export default App;
