import {
  all, takeLatest, put
} from 'redux-saga/effects';
import { Types } from '../../ducks/Path';
import { api } from '../../../services/api';
import ls from 'local-storage';

function* loadPaths(){
  try {
    const { data } = yield api.get('/challenges');
    yield put({type: Types.SET_PATHS, payload: { challenges: data}})
  } catch (error) {
    yield put({type: Types.SET_PATHS, payload: { challenges: [] }})
    
  }
}

export default all([
  takeLatest(Types.LOAD_PATHS, loadPaths),
]);

