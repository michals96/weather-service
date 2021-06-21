import { ADD_CITY, ADD_CITY_TEMP, REMOVE_CITY, REQUEST_SENT, REQUEST_SUCCEEDED } from '../actions/types';
import rootReducer from "./index";

const INITIAL_STATE_CITIES = {
  city_list: [],
  count: 0,
  isLoading: false,
};

function cities(state = INITIAL_STATE_CITIES, action) {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        city_list: state.city_list.concat([{ city: action.text }]),
        count: state.count + 1,
      };
    case ADD_CITY_TEMP:
      return {
        ...state,
        city_list: state.city_list.map((city) => {
          if (city.city === action.payload.city) {
            return {
              ...action.payload,
            };
          }
          return city;
        }),
      };
    case REMOVE_CITY:
      return {
        ...state,
        city_list: state.city_list.filter((city) => city.city !== action.text),
        count: state.count - 1,
      };
    case REQUEST_SENT:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default cities;
