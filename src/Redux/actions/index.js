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

export const deleteRequest = createAction(constant.DELETE_REQUEST);
export const deleteSuccess = createAction(constant.DELETE_SUCCESS);
export const deleteError = createAction(constant.DELETE_ERROR);


export const alldeleteRequest = createAction(constant.ALLDELETE_REQUEST);
export const alldeleteSuccess = createAction(constant.ALLDELETE_SUCCESS);
export const alldeleteError = createAction(constant.ALLDELETE_ERROR);


export const optionRequest = createAction(constant.OPTION_REQUEST);
export const optionSuccess = createAction(constant.OPTION_SUCCESS);
export const optionError = createAction(constant.OPTION_ERROR);



export const titleRequest = createAction(constant.TITLE_REQUEST);
export const titleSuccess = createAction(constant.TITLE_SUCCESS);
export const titleError = createAction(constant.TITLE_ERROR)
