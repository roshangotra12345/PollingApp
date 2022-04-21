import { combineReducers } from "redux";
import login from "./login";
import Signup from "./SignUp";

export const rootReducer = combineReducers({
    login: login,
    Signup: Signup
})