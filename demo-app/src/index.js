import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

const ADD_CITY = "ADD_CITY";
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
        city_list: state.city_list.concat([action.text]),
        count: state.count + 1,
      };
    case REMOVE_CITY:
      return {
        ...state,
        city_list: state.city_list.filter((city) => city !== action.text),
        count: state.count - 1,
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
