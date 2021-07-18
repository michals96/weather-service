import React, { Component } from "react";
import WeatherItems from "./WeatherItems";
import "../style/weatherList.css";
import Counter from "./Counter";
import NavigationBar from "./NavigationBar";
import { connect } from "react-redux";
import {
  addCity,
  addCityTemp,
  removeCity,
} from "../actions/weatherListActions";
import CustomLoader from "./CustomLoader";

export function HomePage() {
  // funkcja będzie definiowana zawsze, jak by to zrobić z useCallback?
  function handleSubmit(e) {
    e.preventDefault();

    var correctCity = true;

    const cityName = this._inputElement.value;

    this.props.cities.map((item) => {
      if (item.city.includes(cityName)) {
        correctCity = false;
        alert("Try different city");
      }
    });

    if (correctCity) {
      addCity(cityName);
      addCityTemp(cityName);
    }

    correctCity = true;
  }

  return (
    <div className="counterListContainer">
      <div className="navbar">
        <NavigationBar />
      </div>
      <div className="counter">
        <Counter />
      </div>
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={handleSubmit}>
          <input placeholder="Enter city name" ref={(a) => (console.log(_inputElement))}></input>
              <button type="submit">add</button>
          </form>
        </div>
        {<CustomLoader />}
      </div>
    </div>
  );
}

export default HomePage;
