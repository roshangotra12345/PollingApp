//import {signupSuccess,signupError} from '../actions';
import {alllistSuccess ,alllistError } from '../actions/index'
///import { alllistError } from '../actions';
import {call, put, takeLatest} from 'redux-saga/effects';
import * as action from '../constant';
import axios from 'axios';

function* AllList(action) {
    
  let url = `https://secure-refuge-14993.herokuapp.com/list_polls`;
  try {
    let response = yield call(axios.get, url);
    console.log(response, 'response');
    if (response?.data?.error) {
      yield put(alllistError({error: response?.data?.data}));
    } else {
      yield put(alllistSuccess(response.data));
    }
  } catch (e) {
    yield put(alllistError({error: e}));
  }
}

export function* AllListSaga() {
  yield takeLatest(action.ALLLIST_REQUEST, AllList);
}