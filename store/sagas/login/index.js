import {
  all, takeLatest
} from 'redux-saga/effects';
import { Types } from '../../ducks/Login';

function* submitLogin(action) {
  
}

export default all([
  takeLatest(Types.SUBMIT_LOGIN, submitLogin )
]);
