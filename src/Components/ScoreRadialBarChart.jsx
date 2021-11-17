import React, { Component } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import fetchData from "../Api/api";

/**
 * ScoreRadialBarChart
 * @class ScoreRadialBarChart
 * @extends {Component}
 * @param {object} props
 * @returns {object}
 */
export class ChartRadial extends Component {
  constructor(props) {
    super(props);

    this.endpoint = this.props.endpoint;
    this.user = this.props.user;
    this.state = {
      items: {},
      loading: false,
      error: null,
    };
  }
  mapData(data) {
    const score = data.todayScore || data.score; // if todayScore is not available, use score instead
    return [
      { name: "todayScore", value: score }, // if todayScore is not available, use score instead
      { name: "placeholder", value: 1 }, // this is to make sure the chart is not empty
    ];
  }

  renderColorfulLegendText(dataReceived) {
    return (
      <div
        style={{
          display: "flex",
          position: "absolute",
          height: "120px",
          width: "60px",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignContent: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Roboto",
            fontSize: "26px",
            lineHeight: "36px",
            margin: "0",
          }}
        >
          {`${dataReceived[0].value * 100}%`}
        </p>

        <p
          style={{
            fontFamily: "Roboto",
            fontSize: "16px",
            color: "#74798C",
            lineHeight: "20px",
            margin: "0",
          }}
        >
          of your
        </p>
        <p
          style={{
            fontFamily: "Roboto",
            fontSize: "16px",
            color: "#74798C",
            lineHeight: "20px",
            margin: "0",
          }}
        >
          goal
        </p>
      </div>
    );
  }

  componentDidMount() {
    const { endpoint } = this.props;
    const { user } = this.props;
    fetchData(this.user, this.endpoint).then((response) => {
      this.setState({
        items: response.data,
        loading: false,
      });
    });
  }
  render() {
    const dataReceived = this.mapData(this.state.items); //this.state.items.todayScore || this.state.items.score;
    return (
      <ResponsiveContainer width='99%' height='99%'>
        <RadialBarChart
          cx='50%'
          cy='50%'
          innerRadius='70%'
          outerRadius='90%'
          barSize={20}
          data={dataReceived}
          startAngle={220}
          endAngle={-210}
        >
          <RadialBar
            minAngle={15}
            clockWise
            dataKey='value'
            fill='#FF0000'
            cornerRadius={10}
          >
            {dataReceived.map((entry, index) => {
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={index === 0 ? "#FF0000" : "rgba(255, 0, 0, 0)"}
                />
              );
            })}
          </RadialBar>
          <Legend
            wrapperStyle={{
              position: "absolute",
              left: "calc(50% - 30px)", // -30px to center the legend in the middle of the chart (instead of the left edge
              top: "calc(50% - 60px)", // -60px to center the legend in the middle of the chart (instead of the top edge
            }}
            content={() => this.renderColorfulLegendText(dataReceived)}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}

export default ChartRadial;

ChartRadial.propTypes = {
  user: PropTypes.string.isRequired,
};
