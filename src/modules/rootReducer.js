import { combineReducers } from "redux";
import { loggedIn } from "./Auth";
import { order } from "./Order";
import { profileInit } from "./Profile";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  loggedIn,
  order,
  profileInit,
  form: formReducer
});
