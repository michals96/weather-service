import store from "../store/store";
import axios from "axios";
import { ADD_CITY_TEMP, ADD_CITY, REMOVE_CITY } from "./types";

export const addCityTemp = (cityName) =>
  store.dispatch(
    ((cityName) => {
      return async (dispatch) => {
        const res = await axios
          .get("http://localhost:8080/weather/" + cityName)
          .then(
            (res) => dispatch({ type: ADD_CITY_TEMP, payload: res.data }),  
            (err) => {}
          );
      };
    })(cityName)
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