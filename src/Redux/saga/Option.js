//import {loginSuccess, loginError} from '../actions';
import {optionSuccess, optionError} from '../actions';
import {call, put, takeLatest} from 'redux-saga/effects';
import * as action from '../constant';
import axios from 'axios';

function* Option(action) {
  const {option, id} = action.payload;
  console.log(option, 'saaaaaaa');
  let url = `https://secure-refuge-14993.herokuapp.com/add_new_option?id=${id}&option_text=${option}`;
  try {
    let response = yield call(axios.post, url);
    if (response?.data?.error) {
      yield put(optionError({error: response?.data?.data}));
    } else {
      yield put(optionSuccess(response.data));
    }
  } catch (e) {
    yield put(optionError({error: e}));
  }
}

export function* OptionSaga() {
  yield takeLatest(action.OPTION_REQUEST, Option);
}
