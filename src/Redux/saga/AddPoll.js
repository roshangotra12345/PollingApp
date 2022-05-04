//import {signupSuccess, signupError} from '../actions';
import {addPollSuccess, addPollError, alllistRequest} from '../actions';
//import { addPollError } from '../actions';
import {call, put, takeLatest} from 'redux-saga/effects';
import * as action from '../constant';
import axios from 'axios';

function* AddPoll(action) {
  console.log(action, 'add new Polll aar raha hai kya');
  const {question, option1, option2, option3, option4} = action.payload;
  // let url = `https://secure-refuge-14993.herokuapp.com/add_user?username=${username}&password=${password}&role=${role}`;

  let url = `https://secure-refuge-14993.herokuapp.com/add_poll?title=${question}&options=${option1}____${option2}____${option3}____${option4}`;
  try {
    let response = yield call(axios.post, url);
    if (response?.data?.error) {
      yield put(addPollError({error: response?.data?.data}));
    } else {
      yield put(addPollSuccess(response.data));
      yield put(alllistRequest());
    }
  } catch (e) {
    yield put(addPollError({error: e}));
  }
}

export function* AddPollSaga() {
  yield takeLatest(action.ADDPOLL_REQUEST, AddPoll);
}
