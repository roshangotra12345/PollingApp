//import { deleteSuccess,deleteError } from '../actions';
import { titleSuccess,titleError } from '../actions';
import {call, put, takeLatest} from 'redux-saga/effects';
import * as action from '../constant';
import axios from 'axios';

function* EditTitle(action) {

 let url = `https://secure-refuge-14993.herokuapp.com/update_poll_title?id=577212fdd1bba33c17b5b64e&title=newtitle`;
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