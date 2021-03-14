import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import homepage from "./components/HomePage";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

const ADD_CITY = 'ADD_CITY';
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
    
export function addCity(city){
    return {
        type: ADD_CITY,
        text: city,
    }
}

export function incrementCounter(weatherList){
  return {
    type: INCREMENT_COUNTER,
    weatherList
  }
}

const INITIAL_STATE_CITIES = {
  city_list: [],
  count: 0,
};

function cities(state = INITIAL_STATE_CITIES, action) {
  console.log("cities : ", action);
  switch (action.type) {
    case "ADD_CITY":
      return {
        ...state,
        city_list: state.city_list.concat([action.text]),
        count: state.count + 1,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ cities });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

setTimeout(() => {
  store.dispatch({
    type: "ADD_CITY",
    text: "Warsaw",
  });
}, 3000);

setTimeout(() => {
  store.dispatch({
    type: "ADD_CITY",
    text: "Swiebodzin",
  });
}, 10000);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
