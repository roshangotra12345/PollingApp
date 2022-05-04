import {loginSuccess, loginError} from '../actions';
import {call, put, takeLatest} from 'redux-saga/effects';
import * as action from '../constant';

import axios from 'axios';
//import jwt from 'jsonwebtoken';
import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* login(action) {
  const {username, password, navigation} = action.payload;
  console.log(action, '======action');
  let url = `https://secure-refuge-14993.herokuapp.com/login?username=${username}&password=${password}`;

  try {
    let response = yield call(axios.get, url);

    let decoded = jwt_decode(response.data.token);
    console.log(response, '-----------response');

    if (response?.data?.error == 1) {
      yield put(loginError(response));
      console.log(response, 'Password error');
      // navigation.navigate('Signup');
      // alert('Register here');
    } else {
      AsyncStorage.setItem('token', response.data.token);
      yield put(loginSuccess({res: response.data, decoded: decoded}));
      navigation.navigate('Question');
    }
  } catch (e) {
    yield put(loginError({error: e}));
    //   alert('Your Password and user Name is Not Match');
  }
}

export function* loginSaga() {
  yield takeLatest(action.LOGIN_REQUEST, login);
}
