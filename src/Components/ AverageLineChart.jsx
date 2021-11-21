import React, { Component } from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import fetchData from "../Api/api";
import "../Styles/AverageLineCharts.css";

/**
 * @description: This is the AverageLineChart component. It is responsible for displaying the average line chart.
 * @param {string} data - The data that is passed to the component.
 * @param {string} title - The title that is passed to the component.
 * @param {object} props - The props passed to the component from the parent component.
 * @returns {object} - The AverageLineChart component to be rendered.
 */

export class ChartLine extends Component {
  constructor(props) {
    // this is the constructor of the component and it is used to initialize the state of the component and it is called before the render method is called for the first time and it is used to set the initial state of the component and it is called before the render method is called for the first time
    super(props); // this is used to call the parent constructor and pass the props to the parent constructor from the parent component (AverageLineChart)

    // const { endpoint } = this.props;
    // const { user } = this.props;
    this.endpoint = this.props.endpoint;
    this.user = this.props.user;
    this.state = {
      items: {}, // this is the state of the component and it is used to store the data that is fetched from the api and it is used to display the data on the chart and it is used to fetch the data from the api and it is used to set the state of the items
      loading: false,
      error: null,
    };
  }

  /**
   * @description: This is the custom tooltip that is used to display the data on the tooltip
   * @param {object} props - The props passed to the component from the parent component.
   * //@returns {object} - The custom tooltip component to be rendered.
   *
   */
  componentDidMount() {
    // const { endpoint } = this.props; //get the endpoint from the props;
    // const { user } = this.props; // user is passed as a prop from the parent component
    fetchData(this.user, this.endpoint).then((response) => {
      this.setState({
        items: response.data.sessions,
        loading: false,
      });
      // console.log(response.data);
    });
  }

  weekDay(day) {
    //what is let week
    let week = { 1: "M", 2: "T", 3: "W", 4: "T", 5: "F", 6: "S", 7: "S" }; // this is the week day array that is used to display the week day in letters and it is used to get the week day from the number

    return week[day];
  } // this is used to change the week day from number to letters

  customTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className='custom-tooltip_line'>
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };
  render() {
    return (
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          margin={{ top: 90, right: 0, bottom: 17, left: 0 }} //this is the margin of the chart
          data={this.state.items}
          style={{
            borderRadius: "7px",
            background:
              "linear-gradient(to right, #FF0000 70%, #E60002 70% 100%)",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0222250)",
          }}
        >
          <defs>
            {
              "</defs> it is a defination of a gradient in the chart and it is used to create a gradient for the chart background color "
            }

            <linearGradient id='linear'>
              <stop offset='100%' stopColor='rgba(255,255,255,1)' />
              <stop offset='0%' stopColor='rgba(255,255,255,0.5)' />
            </linearGradient>
          </defs>
          <XAxis
            dataKey='day' // this is the key of the data that is used to display the data on the x axis of the chart(days in numbers)
            tickLine={false} // hide tick line
            axisLine={false} // hide axis line
            tickFormatter={this.weekDay} // this is used to change the week day from number to letters
            tick={{
              //customize the tick label here(days of the week)
              fill: "rgba(255,255,255,0.5)",
              fontSize: "12px",
              fontWeight: "500",
              lineHeight: "24px",
              dy: 2, // offset the tick label vertically
            }}
            interval='preserveStartEnd' //If set 0, all the ticks will be shown. If set preserveStart", "preserveEnd" or "preserveStartEnd", the ticks which is to be shown or hidden will be calculated automatically.
            tickMargin={5} //margin between the tick and the axis
          />
          <Tooltip content={this.customTooltip} offset={5} cursor={false} />
          <Line
            type='monotone'
            dataKey='sessionLength'
            strokeWidth={2}
            stroke="url('#linear')" // set the color of the line here using the linear gradient defined above (see defs section) and the linearGradientId above (see linearGradient above) and the stopColor above (see linearGradient above) and the stopOffset above (see linearGradient above)
            activeDot={{
              r: 4, // radius of the dot
              fill: "white", // color of the dot
              strokeWidth: 8, // width of the stroke
              stroke: "rgba(255, 255, 255, 0.25)", // stroke color
            }}
            dot={false} // hide dots
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default ChartLine;

ChartLine.propTypes = {
  endpoint: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};
