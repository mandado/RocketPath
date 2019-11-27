import {all} from 'redux-saga/effects';
import LoginSaga from './login/index';
import InterestsSaga from './interests/index';
import ChallengeSaga from './challenge/index';
import Path from './Path/index';

export default function* rootSaga() {
  return yield all([
    LoginSaga,
    Path,
    InterestsSaga,
    ChallengeSaga,
  ]);
}
