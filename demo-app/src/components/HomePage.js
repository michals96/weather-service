import React, { Component } from "react";
import WeatherItems from "./WeatherItems";
import "../style/weatherList.css";
import Counter from "./Counter";
import { connect } from "react-redux";
import { addCity, addCityTemp, addCityTempDispatched, removeCity } from "../index";
import axios from "axios";

export class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    var correctCity = true;
    
    const cityName = this._inputElement.value;

    this.props.cities.map(item => {
      if(item.city.includes(cityName)){
        correctCity = false;
        alert("Try different city");
      }
    });

    if(correctCity){

      addCity(cityName)
      addCityTemp(cityName)

      // const promise = axios.get("http://localhost:8080/weather/" + cityName);
      // promise.then(res => {
      //     addCityTemp(res.data);
      //     console.log(this);
      //     this._inputElement.value = "";
      // });
    }

    correctCity = true;
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


  // Saga + Episcs + RX JS

  // Interceptor + globalny loader
  // Zapytanie do backendu (uzywamy axiosa), 
  // wyswietlamy loader [GLOBALNIE]
  // wrocilo zapytanie -> chowamy loader