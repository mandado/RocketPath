import {
  all, takeLatest, put
} from 'redux-saga/effects';
import { Types } from '../../ducks/Login';
import { Types as TypesModal } from '../../ducks/modal';
import { api } from '../../../services/api';
import ls from 'local-storage'


function* submitLogin(action) {
  try {
    const { payload } = action;
    const { data, status } = yield api.post('/login', payload);
    if(status === 200){
     const token = data.user.token;
     ls.set('token', token);
     yield put({type: Types.RESPONSE, payload: { token }});
     yield put({type: TypesModal.TOGGLE_LOGIN_MODAL, payload: false});
    }
    else 
      throw response;
  } catch (error) {
    console.log(error)
  }
}

function* submitSignup(action) {
  try {
    const { payload } = action;
    const response = yield api.post('/users', payload);
    if(response.status === 200){
      const { data } = yield api.post('/login', payload);
     const token = data.user.token;
     ls.set('token', token);
     yield put({type: Types.RESPONSE, payload: { token }});
     yield put({type: TypesModal.TOGGLE_SIGNUP_MODAL, payload: false});
    }
    else 
      throw response;
  } catch (error) {
    console.log(error, "error")
  }
}

function* logout(action) {
  ls.set('token', undefined);
  yield put({type: Types.RESPONSE, payload: { token: undefined }});
}

export default all([
  takeLatest(Types.SUBMIT_LOGIN, submitLogin ),
  takeLatest(Types.LOGOUT, logout ),
  takeLatest(Types.SUBMIT_SIGNUP, submitSignup )
]);
