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
    const { data:{ user, token:{token}} = {}, status } = yield api.post('/login', payload);
    if(status === 200){
     ls.set('token', token);
     ls.set('current_user', user.id);
     yield put({type: Types.RESPONSE, payload: { token, user }});
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
      const { data:{ user, token} = {} } = yield api.post('/login', payload);
     ls.set('token', token.token);
     ls.set('current_user', user.id);
     yield put({type: Types.RESPONSE, payload: { token, user }});
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
  ls.set('current_user', undefined);
  yield put({type: Types.RESPONSE, payload: { token: undefined }});
}

function* getCurrentUser() {
  try { 
    const current_user = ls.get('current_user');
    const token = ls.get('token');
    if(current_user && token){
      const response = yield api.get(`/users/${current_user}`);
      const { data: user = {}, status } = response;
      if(status === 200){
       yield put({type: Types.RESPONSE, payload: { user, token, checked: true }});
       return;
      }
      else 
        throw response;
    }
    yield put({type: Types.RESPONSE, payload: { checked: true}});
  } catch (error) {
    console.log(error)
    yield put({type: Types.RESPONSE, payload: { checked: true}});
  }
}

export default all([
  takeLatest(Types.SUBMIT_LOGIN, submitLogin ),
  takeLatest(Types.LOGOUT, logout ),
  takeLatest(Types.SUBMIT_SIGNUP, submitSignup ),
  takeLatest(Types.CHECK_LOGIN, getCurrentUser)
]);
