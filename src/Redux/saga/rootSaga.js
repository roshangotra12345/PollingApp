import {all, fork} from 'redux-saga/effects';
import { loginSaga } from './login';
import { SignUpSaga } from './SignUp';

export default function* rootSaga() {
    yield all([fork(loginSaga)]);
    yield all([fork(SignUpSaga)])
}