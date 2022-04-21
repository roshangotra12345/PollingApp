import {signupSuccess,signupError} from '../actions';
import {call, put, takeLatest} from 'redux-saga/effects';
import * as action from '../constant';
import axios from 'axios';

function* SignUp(action) {
  const {username, password,role} = action.payload;
  let url = `https://secure-refuge-14993.herokuapp.com/add_user?username=${username}&password=${password}&role=admin`;
  try {
    let response = yield call(axios.post, url);
    console.log(response, 'response' , action.payload);
    if (response?.data?.error) {
      yield put(signupError({error: response?.data?.data}));
    } else {
      yield put(signupSuccess(response.data));
    }
  } catch (e) {
    yield put(signupError({error: e}));
  }
}

export function* SignUpSaga() {
  yield takeLatest(action.SIGNUP_REQUEST, SignUp);
}