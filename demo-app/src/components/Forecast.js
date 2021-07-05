import React, { Component } from "react";
import "../style/weatherList.css";

export class Forecast extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="counterListContainer">
          Forecast
      </div>
    );
  }
}

export default Forecast;