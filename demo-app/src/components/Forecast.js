import React, { Component } from "react";
import ForecastItems from "./ForecastItems";
import "../style/weatherList.css";
import NavigationBar from "./NavigationBar";
import { connect } from "react-redux";
import { addCity, addCityTemp, removeCity } from "../actions/weatherListActions";
import CustomLoader from "./CustomLoader";

export class Forecast extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="counterListContainer">
        <div className="navbar">
          <NavigationBar/>
        </div>
        <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.handleSubmit}>
              <input
                ref={(a) => (this._inputElement = a)}
                placeholder="Enter city name"
              ></input>
              <button type="submit">add</button>
            </form>
          </div>
          <ForecastItems/>
          {<CustomLoader/>}
        </div>
      </div>
    );
  }
}

export default Forecast;