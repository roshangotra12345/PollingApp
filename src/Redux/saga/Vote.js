//import {alllistSuccess ,alllistError } from '../actions/index'
//import {deleteSuccess, deleteError, alllistRequest} from '../actions';
import {voteSuccess, voteError, alllistRequest} from '../actions';
import {call, put, takeLatest} from 'redux-saga/effects';
import * as action from '../constant';
import axios from 'axios';
//import {get} from 'react-native/Libraries/Utilities/PixelRatio';

// const accessToken =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWEwMTgyYzU5NTI3ZmUwMDEyMzcwN2IyIiwiaWF0IjoxNTEwMDQ4NDY4LCJleHAiOjE1MTM2NDg0Njh9.DG93Hq-Fde9kNZbgnr34l2dZyeEYyJ0OfD_9yZK1JCQ';

// axios.interceptors.request.use(
//   config => {
//     config.headers.authorization = `Bearer ${accessToken}`;
//   },
//   error => {
//     return Promise.reject(error);
//   },
// );

function* Vote(action) {
  const {id, option} = action.payload;
  console.log(action, '---action--------actino');
  let url = `https://secure-refuge-14993.herokuapp.com/do_vote?id=${id}&option_text=${option}`;

  // axios.get(api, {headers: {Authorization: `Bearer ${token}`}});
  try {
    let response = yield call(axios.get, url);
    if (response?.data?.error) {
      yield put(voteError({error: response?.data?.data}));
    } else {
      yield put(voteSuccess(response.data));
      yield put(alllistRequest());
    }
  } catch (e) {
    yield put(voteError({error: e}));
  }
}

export function* VoteSaga() {
  yield takeLatest(action.VOTE_REQUEST, Vote);
}
