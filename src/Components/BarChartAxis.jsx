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
const data = [
  {
    date: "2000-01",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: "2000-02",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: "2000-03",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    date: "2000-04",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: "2000-05",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: "2000-06",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    date: "2000-07",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    date: "2000-08",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: "2000-09",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: "2000-10",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    date: "2000-11",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: "2000-12",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

export class ChartBar extends Component {
  constructor(props) {
    super(props); //Call the constructor of the parent class
    //set the state of the component to an empty object
    const { endpoint } = this.props; //get the endpoint from the props;
    // user is passed as a prop from the parent component
    // this.user = props.user;
    const { user } = this.props;

    this.state = {
      data: {}, // data: {name: "", value: ""}
      loading: true, //loading: true if the data is still being fetched, false otherwise
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
    fetchData(endpoint, user).then((data) => {
      //data is an array of objects
      this.setState({
        //set the state of the component to the data fetched from the API
        data: data,
        loading: false, //set loading to false, since the data has been fetched
      });
    });
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
    return (
      <div>
        <h1>sfvsdf</h1>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          ></BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default ChartBar;
