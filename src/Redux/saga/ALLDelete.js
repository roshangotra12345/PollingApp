//import {alllistSuccess ,alllistError } from '../actions/index'
//import { deleteSuccess,deleteError } from '../actions';
import { alldeleteSuccess,alldeleteError } from '../actions';
import {call, put, takeLatest} from 'redux-saga/effects';
import * as action from '../constant';
import axios from 'axios';

function* ALLDelete(action) {
    let url = `https://secure-refuge-14993.herokuapp.com/delete_poll?id=${action.payload}`;
    try {
    let response = yield call(axios.get, url);
    if (response?.data?.error) {
      yield put(alldeleteError({error: response?.data?.data}));
    } else {
      yield put(alldeleteSuccess(response.data));
    }
  } catch (e) {
    yield put(alldeleteError({error: e}));
  }
}

export function* ALLDeleteSaga() {
  yield takeLatest(action.ALLDELETE_REQUEST, ALLDelete);
}