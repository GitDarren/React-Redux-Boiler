import { combineReducers } from "redux";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";
import todos from "./todos";
import dogs from "./dogs";

const rootReducer = combineReducers({
  todos,
  dogs,
  routing: routerReducer

});

export default rootReducer;
