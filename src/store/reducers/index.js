import { combineReducers } from "redux";
import input from "./input"
import counter from "./counter"

export default combineReducers({ input, counter });