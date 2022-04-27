import {all, fork} from 'redux-saga/effects';
import { loginSaga } from './login';
import { SignUpSaga } from './SignUp';
import { AllListSaga } from './AllList';
import { DeleteSaga } from './Delete';
import { ALLDeleteSaga } from './ALLDelete';
import { OptionSaga } from './Option';
import { TitleSaga } from './EditTitle';

export default function* rootSaga() {
    yield all([fork(loginSaga)]);
    yield all([fork(SignUpSaga)])
    yield all([fork(AllListSaga)])
    yield all([fork(DeleteSaga)])
    yield all([fork(ALLDeleteSaga)])
    yield all([fork(OptionSaga)])
    yield all([fork(TitleSaga)])
  
}