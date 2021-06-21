import { combineReducers } from "redux";
import cities from "./cityListReducer";

const rootReducer = combineReducers({ cities });

export default rootReducer;