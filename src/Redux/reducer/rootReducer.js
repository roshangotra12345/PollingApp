import { combineReducers } from "redux";
import login from "./login";
import Signup from "./SignUp";
import AllList from "./AllList";

export const rootReducer = combineReducers({
    login: login,
    Signup: Signup,
    AllList:AllList
    
})