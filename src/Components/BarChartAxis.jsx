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
import fetchData from "../Api/api";

export class ChartBar extends Component {
  constructor(props) {
    super(props); //Call the constructor of the parent class
    //set the state of the component to an empty object
    const { endpoint } = this.props; //get the endpoint from the props;
    // user is passed as a prop from the parent component
    // this.user = props.user;
    const { user } = this.props;

    this.state = {
      items: {}, // an empty object to store the data fetched from the API
      loading: false, //because we are not requesting data from the api yet
      error: null, // error: {message: ""},  if there is an error, it will be stored here
    };
  }

  // The next phase in the lifecycle is when a component is updated
  // The componentDidUpdate() method is called after a component is updated.
  //A component is updated whenever there is a change in the component's state or props.
  //The render() method is required and will always be called

  //0 The componentDidUpdate method is called after the component is updated in the DOM.
  //1When the component is mounting it is rendered with loading: true and error: null in the state
  //2When the component has been mounted the state is set to loading: false and data:data
  //
  //This action triggers the update of the component and the render method is called and since this component has a componentDidUpdate method we can use it to fetch the data
  //When the component is updated, it is rendered with loading: false and error: null in the state
  componentDidMount() {
    //The componentDidMount() method is called after the component is rendered for the first time. It is called before the render() method.
    // This is a good place to set up a timer or fetch data from the server. If you need to load data after the initial rendering, you should use componentDidUpdate() instead.
    //when the component is mounted, fetch the data
    const { endpoint } = this.props; //get the endpoint from the props;
    const { user } = this.props; // user is passed as a prop from the parent component
    //Fetch data from the API and store it in the state of the component  / /
    fetchData(endpoint, user).then(
      (response) => {
        //data is an array of objects

        this.setState({
          items: response.data.sessions,
          loading: true, //because we are requesting data from the api now
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          loaded: true,
          error: console.log(`error`, error),
        });
      }
    );
  }

  getDay(date) {
    //returns the day of the week
    const day = new Date(date).getDay(); //Gets the day of the week, using local time.
    return day;
  }

  monthTickFormatter = (tick) => {
    const date = new Date(tick);

    return date.getMonth() + 1;
  };

  renderQuarterTick = (tickProps) => {
    const { x, y, payload } = tickProps;
    const { value, offset } = payload;
    const date = new Date(value);
    const month = date.getMonth();
    const quarterNo = Math.floor(month / 3) + 1;
    const isMidMonth = month % 3 === 1;

    if (month % 3 === 1) {
      return <text x={x} y={y - 4} textAnchor='middle'>{`Q${quarterNo}`}</text>;
    }

    const isLast = month === 11;

    if (month % 3 === 0 || isLast) {
      const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;

      return <path d={`M${pathX},${y - 4}v${-35}`} stroke='red' />;
    }
    return null;
  };

  render() {
    const { items, loading, error } = this.state;
    return (
      <div>
        <h1>sfvsdf</h1>

        <BarChart width={730} height={250} data={this.state.items}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='kilogram' fill='#8884d8' />
          <Bar dataKey='calories' fill='#82ca9d' />
        </BarChart>
      </div>
    );
  }
}

export default ChartBar;
