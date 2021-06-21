import rootReducer from "../reducers/index";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import logger from "../thunk/middleware";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;