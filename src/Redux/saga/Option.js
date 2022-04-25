//import {loginSuccess, loginError} from '../actions';
import { optionSuccess,optionError } from '../actions';
import {call, put, takeLatest} from 'redux-saga/effects';
import * as action from '../constant';
import axios from 'axios';

function* Option(action) {
    const {username, password,role} = action.payload;
    let url = `https://secure-refuge-14993.herokuapp.com/add_user?username=${username}&password=${password}&role=${role}`;
    try {
      let response = yield call(axios.post, url);
      if (response?.data?.error) {
        yield put(optionError ({error: response?.data?.data}));
      } else {
        yield put(optionSuccess(response.data));
      }
    } catch (e) {
      yield put(optionError({error: e}));
    }
  }
  
  export function* SignUpSaga() {
    yield takeLatest(action.OPTION_REQUEST, Option);
  }