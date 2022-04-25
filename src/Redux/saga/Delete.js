//import {alllistSuccess ,alllistError } from '../actions/index'
import { deleteSuccess,deleteError } from '../actions';

import {call, put, takeLatest} from 'redux-saga/effects';
import * as action from '../constant';
import axios from 'axios';

function* Delete(action) {
  let url = `https://secure-refuge-14993.herokuapp.com/delete_poll_option?id=${action.payload.id}&option_text=${action.payload.option}`;
  try {
    let response = yield call(axios.get, url);
    if (response?.data?.error) {
      yield put(deleteError({error: response?.data?.data}));
    } else {
      yield put(deleteSuccess(response.data));
    }
  } catch (e) {
    yield put(deleteError({error: e}));
  }
}

export function* DeleteSaga() {
  yield takeLatest(action.DELETE_REQUEST, Delete);
}