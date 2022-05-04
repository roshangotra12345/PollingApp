//import { deleteSuccess,deleteError } from '../actions';
import {titleSuccess, titleError, alllistRequest} from '../actions';
import {call, put, takeLatest} from 'redux-saga/effects';
import * as action from '../constant';
import axios from 'axios';

function* EditTitle(action) {
  const {title, id} = action.payload;
  console.log(action);
  let url = `https://secure-refuge-14993.herokuapp.com/update_poll_title?id=${id}&title=${title}`;
  try {
    let response = yield call(axios.get, url);
    if (response?.data?.error) {
      yield put(titleError({error: response?.data?.data}));
    } else {
      yield put(titleSuccess(response.data));
      yield put(alllistRequest());
    }
  } catch (e) {
    yield put(titleError({error: e}));
  }
}

export function* TitleSaga() {
  yield takeLatest(action.TITLE_REQUEST, EditTitle);
}
