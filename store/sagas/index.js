import {all} from 'redux-saga/effects';
import LoginSaga from './login/index';

export default function* rootSaga() {
  return yield all([
    LoginSaga,
  ]);
}
