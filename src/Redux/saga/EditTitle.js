//import { deleteSuccess,deleteError } from '../actions';
import { titleSuccess,titleError } from '../actions';
import {call, put, takeLatest} from 'redux-saga/effects';
import * as action from '../constant';
import axios from 'axios';

function* EditTitle(action) {

  // let url = `https://secure-refuge-14993.herokuapp.com/delete_poll_option?id=${action.payload.id}&option_text=${action.payload.option}`;
  try {
    let response = yield call(axios.get, url);
    if (response?.data?.error) {
      yield put(titleError({error: response?.data?.data}));
    } else {
      yield put(titleSuccess(response.data));
    }
  } catch (e) {
    yield put(titleError({error: e}));
  }
}

export function* TitleSaga() {
  yield takeLatest(action.TITLE_REQUEST,EditTitle);
}