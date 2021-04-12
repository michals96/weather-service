import React, { Component } from "react";
import WeatherItems from "./WeatherItems";
import "../style/weatherList.css";
import Counter from "./Counter";
import { connect } from "react-redux";
import { addCity, removeCity } from "../index";
import axios from "axios";

export class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {

    const promise = axios.get("http://localhost:8080/weather/" + this._inputElement.value);

    promise.then(res => {
        addCity(res.data.city + ", " + res.data.weatherState + ", " + res.data.temperature);
        this._inputElement.value = "";
    });

    
    e.preventDefault();
  };

  render(){
    return (
      <div className="counterListContainer">
        <div className="counter">
          <Counter />
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
          <WeatherItems
            entries={this.props.cities}
            delete={removeCity}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cities: state.cities.city_list,
});

/*const mapDispatchToProps = (dispatch) => {
  return {
    remove: (city) => dispatch(removeCity(city)),
    add: (city) => {
      return dispatch(addCity(city));
    },
  };
};*/

export default connect(mapStateToProps
 // , mapDispatchToProps
  )(Homepage);
