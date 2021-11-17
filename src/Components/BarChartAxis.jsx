import React, { Component } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import PropTypes from "prop-types";
import fetchData from "../Api/api";
import "../Styles/BarChart.css";

/**
 * BarChartAxis component
 * @extends Component
 * @param {object} props
 * @param {object} props.data
 * @param {string} props.data.name
 * @param {number} props.data.value
 * @param {string} props.data.color
 * @param {string} props.data.fill
 *
 */
export class ChartBar extends Component {
  constructor(props) {
    super(props); //Call the constructor of the parent class
    //set the state of the component to an empty object
    const { endpoint } = this.props; //get the endpoint from the props;
    // user is passed as a prop from the parent component
    // this.user = props.user;
    const { user } = this.props;
    this.endpoint = this.props.endpoint;
    this.user = this.props.user;
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
    fetchData(this.user, this.endpoint).then(
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
    const day = new Date(date).getDate(); //Gets the day of the week, using local time.
    return day;
  }

  renderColorfulLegendText = (value) => {
    //The formatter function of each span in legend.
    return (
      <span
        style={{
          color: "#74798C",
          paddingLeft: "10px",
          verticalAlign: "top",
          fontSize: "15px",
          lineHeight: "25px",
          fontWeight: "500",
        }}
      >
        {value}
      </span>
    );
  };

  /**
   *
   * @param {object} props
   * @returns {JSX.Element}
   * @returns {HTMLDivElement}
   */
  customTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className='custom-tooltip'>
          <p className='custom-tooltip__kg'>{`${payload[0].value} kg`}</p>
          <p className='custom-tooltip__callories'>{`${payload[1].value} kCal`}</p>
        </div>
      );
    }
    return null;
  };
  render() {
    const { items, loading, error } = this.state;
    return (
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          width={500}
          height={300}
          data={this.state.items}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='1 2' vertical={false} />
          <XAxis
            dataKey='day'
            tickFormatter={this.getDay} //format the tick labels to show the day of the week instead of the number of the day
            tick={{ transform: "translate(0,10)" }} //move the tick to the bottom
            axisLine={false} //hide the axis line
            tickLine={false} //hide the tick line
            axisLine={{ stroke: "#DEDEDE" }} //change the color of the axis
            scale='1'
          />

          <YAxis
            strokeDasharray='1 2'
            orientation='right'
            axisLine={false} //hide the axis line
            tickLine={false} //hide the tick line
            tick={{ transform: "translate(30,0)" }}
          />
          <Tooltip
            // position={{ y: 56 }}
            content={this.customTooltip} //CustomContentOfTooltip  //CustomContentOfTooltip
          />
          <Legend
            iconSize={8}
            iconType='circle'
            verticalAlign='top'
            align='right'
            // format of wrapperStyle is the same as React inline style
            wrapperStyle={{
              //React inline style
              paddingBottom: "47px",
            }}
            formatter={this.renderColorfulLegendText} // change the color
          />
          <Bar
            dataKey='kilogram'
            name='Weight (kg)'
            fill='#282D30'
            radius={[10, 10, 0, 0]}
            barSize={10} //The width or height of each bar.
          />
          <Bar
            dataKey='calories'
            name='Burned calories (kCal)'
            fill='#E60000'
            radius={[10, 10, 0, 0]}
            barSize={10} //The width or height of each bar.
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default ChartBar;
ChartBar.propTypes = {
  endpoint: PropTypes.string.isRequired,

  user: PropTypes.string.isRequired,
};
