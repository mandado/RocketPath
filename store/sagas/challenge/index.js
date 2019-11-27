import {
  all, takeLatest, put
} from 'redux-saga/effects';
import { Types } from '../../ducks/Challenge';
import { api } from '../../../services/api';
import ls from 'local-storage'

function* saveChallenge({ payload }) {
  try { 
    yield api.put(`/user/${ls.get('current_user')}/challenges/${payload.id}`, {
      answer: payload.answer
    });
    yield put({
      type: Types.SAVED_CHALLENGE, 
    });
  } catch (error) {
    console.log(error)
    yield put({
      type: Types.SAVED_CHALLENGE, 
      payload: {}
    });
  }
}

function* readChallenge({ payload: id }) {
  try { 
    const { data } = yield api.get(`/challenges/${id}`);
    yield api.post(`/user/${ls.get('current_user')}/challenges/${id}`);
    yield put({
      type: Types.SET_CHALLENGE, 
      payload: data,
    });
  } catch (error) {
    console.log(error)
    yield put({
      type: Types.SAVED_CHALLENGE, 
      payload: {}
    });
  }
}


export default all([
  takeLatest(Types.SAVE_CHALLENGE, saveChallenge),
  takeLatest(Types.READ_CHALLENGE, readChallenge),
]);

