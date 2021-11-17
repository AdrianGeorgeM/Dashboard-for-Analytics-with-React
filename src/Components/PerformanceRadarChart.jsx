import React, { Component } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import fetchData from "../Api/api";

export class ChartRadar extends Component {
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

  mapData({ kind, data }) {
    let dataRceived = []; //[{ kind: "", value: 0 }];
    if (data) {
      //if data is not empty
      dataRceived = data.map((entry) => {
        //map each entry to a new object with the kind and value of the entry as properties of the object and return it to the array
        return {
          value: entry.value, // value of the entry
          //kind of the entry
          kind:
            kind[entry.kind].charAt(0).toUpperCase() + //capitalize first letter of kind
            kind[entry.kind].slice(1), //remove first letter of kind
        };
      });
    }
    return dataRceived; //return the array
  }

  render() {
    let dataReceived = this.mapData(this.state.items); //map the data received from the api to a new array of objects with the kind and value properties
    console.log(dataReceived);
    return (
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart
          data={dataReceived}
          style={{
            backgroundColor: "#282D30",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.0212250)",
            borderRadius: "5px",
          }}
        >
          <PolarAngleAxis
            dataKey='kind'
            tick={{
              //tick properties
              fill: "#FFFFFF",
              fontWeight: "500",
              fontSize: "12px",
              lineHeigt: "24px",
            }}
            tickLine={false}
          />
          <PolarGrid gridType='polygon' />
          <Radar dataKey='value' fill='rgba(255, 1, 1, 0.8)' />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}

export default ChartRadar;
