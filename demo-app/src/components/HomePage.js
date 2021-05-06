import React, { Component } from "react";
import WeatherItems from "./WeatherItems";
import "../style/weatherList.css";
import Counter from "./Counter";
import { connect } from "react-redux";
import { addCity, addCityTemp, removeCity } from "../index";

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
          {/* RENDER HIGH ORDER COMPONENTS:
          <BlogPost id={1}/>
          <CommentList/> 
          */} 
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cities: state.cities.city_list,
});

export default connect(mapStateToProps)(Homepage);

  // 1. Interceptor + globalny loader*
  // 2. Refactor: pattern dla redux - reducers, store, actions
  // 3. Refactor dasboard: logout mechanism
  // 4. Know-how : Saga + Episcs + RX JS

  /* 
   * Zapytanie do backendu (uzywamy axiosa), 
   Wyswietlamy loader [GLOBALNIE]
   Wrocilo zapytanie -> chowamy loader
   Przecwiczyc HOC 
   */ 