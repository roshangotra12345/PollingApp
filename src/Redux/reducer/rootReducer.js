import { combineReducers } from "redux";
import login from "./login";
import Signup from "./SignUp";
import AllList from "./AllList";
import ALLdelete from "./ALLdelete";
import Options from './Options'
import EditTitle from "./EditTitle";
export const rootReducer = combineReducers({
    login: login,
    Signup: Signup,
    AllList:AllList,
    ALLdelete:ALLdelete,
    Options:Options,
    EditTitle:EditTitle
    

})