import {all, fork} from 'redux-saga/effects';
import { loginSaga } from './login';
import { SignUpSaga } from './SignUp';
import { AllListSaga } from './AllList';

export default function* rootSaga() {
    yield all([fork(loginSaga)]);
    yield all([fork(SignUpSaga)])
    yield all([fork(AllListSaga)])
}