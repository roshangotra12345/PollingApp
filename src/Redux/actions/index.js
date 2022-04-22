import * as constant from "../constant";
import { createAction } from "redux-actions";

export const loginRequest = createAction(constant.LOGIN_REQUEST);
export const loginSuccess = createAction(constant.LOGIN_SUCCESS );
export const loginError = createAction(constant.LOGIN_ERROR);

export const signupRequest = createAction(constant.SIGNUP_REQUEST);
export const  signupSuccess = createAction(constant.SIGNUP_SUCCESS);
export const signupError = createAction(constant.SIGNUP_ERROR);

export const alllistRequest = createAction(constant.ALLLIST_REQUEST);
export const alllistSuccess = createAction(constant.ALLLIST_SUCCESS);
export const alllistError = createAction(constant.ALLLIST_ERROR);