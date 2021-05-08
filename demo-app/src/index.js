import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import axios from "axios";

const ADD_CITY = "ADD_CITY";
const ADD_CITY_TEMP = "ADD_CITY_TEMP";
const REMOVE_CITY = "REMOVE_CITY";

const INITIAL_STATE_CITIES = {
  city_list: [],
  count: 0,
};

function cities(state = INITIAL_STATE_CITIES, action) {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        city_list: state.city_list.concat([{city : action.text}]),
        count: state.count + 1,
      };
    case ADD_CITY_TEMP:
      return{
        ...state,
        city_list: state.city_list.map(city => {
          if(city.city === action.payload.city){
            return {
              ...action.payload
            }
          }
          return city;
        })
      }
    case REMOVE_CITY:
      return {
        ...state,
        city_list: state.city_list.filter((city) => city.city !== action.text),
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ cities });

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk)
);

function sleeper(ms) {
  return function(x) {
    return new Promise(resolve => setTimeout(() => resolve(x), ms));
  };
}

export const addCityTemp = (cityName) => store.dispatch(((cityName) => {
  return (dispatch) => {
    return axios.get("http://localhost:8080/weather/" + cityName).then(sleeper(1000)).then(  
      res => dispatch({ type: ADD_CITY_TEMP, payload: res.data }),
      err => {}
    );
  };
})(cityName));

export function addCity(city) {
  return store.dispatch({
    type: ADD_CITY,
    text: city,
  });
}

export function removeCity(city) {
  return store.dispatch({
    type: REMOVE_CITY,
    text: city,
  });
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

export default store;
