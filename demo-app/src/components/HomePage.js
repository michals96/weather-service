import React, { Component } from "react";
import WeatherItems from "./WeatherItems";
import "../style/weatherList.css";
import Counter from "./Counter";
import { connect } from "react-redux";
import { addCity, addCityTemp, removeCity } from "../actions/weatherListActions";
import CustomLoader from "./CustomLoader";

export class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
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
  };

  render() {
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
          
          <WeatherItems entries={this.props.cities} delete={removeCity} />
          {<CustomLoader/>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cities: state.cities.city_list,
  isLoading: state.cities.isLoading,
});

export default connect(mapStateToProps)(Homepage);

// DONE:
//    -> refactor: clean code + pattern dla redux - reducers, store, actions
//    -> Loader jako interceptor przy logowaniu 
//    -> CustomLoader powinien mieć w środku info isLoading lub gdzieś tam property
//    -> isLoading: state.cities.isLoading, z homepagejs do customloadera
//    -> usun sleeper, uzyj no throttling

// TO DO:
//    -> Refactor dasboard: logout mechanism
//    -> Know-how : Saga + Episcs + RX JS
//    -> HigherOrderWithLoader na nowy component
//    -> Thunk + middleware