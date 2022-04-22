import {loginSuccess, loginError} from '../actions';
import {call, put, takeLatest} from 'redux-saga/effects';
import * as action from '../constant';
import axios from 'axios';

function* login(action) {
  const {username, password,navigation} = action.payload;
  let url = `https://secure-refuge-14993.herokuapp.com/login?username=${username}&password=${password}`;
  try {
    let response = yield call(axios.get, url);
    console.log(response, 'response');
    if (response?.data?.error) {
      yield put(loginError());
      navigation.navigate('Signup')
      alert("Register here")
    } else {
      yield put(loginSuccess(response.data));
      navigation.navigate('Question');
    }
  } catch (e) {
    yield put(loginError({error: e}));
  }
}

export function* loginSaga() {
  yield takeLatest(action.LOGIN_REQUEST, login);
}
