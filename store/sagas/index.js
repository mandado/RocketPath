import {all} from 'redux-saga/effects';
import LoginSaga from './login/index';
import InterestsSaga from './interests/index';

export default function* rootSaga() {
  return yield all([
    LoginSaga,
    InterestsSaga,
  ]);
}
