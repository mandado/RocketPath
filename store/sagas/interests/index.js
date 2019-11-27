import {
  all, takeLatest, put
} from 'redux-saga/effects';
import { Types } from '../../ducks/Interests';
import { Types as TypesLogin } from '../../ducks/Login';
import { api } from '../../../services/api';
import ls from 'local-storage';

function* saveInterests({ payload: interests }) {
  try { 
    const response = yield api.post(`/user/${ls.get('current_user')}/interests`, { 
      interests: interests.filter(item => item.checked).map(item => item.id)
    });
    yield put({
      type: TypesLogin.CHECK_LOGIN, 
    });
    yield put({
      type: Types.SAVED_INTERESTS, 
    });
  } catch (error) {
    console.log(error)
    yield put({
      type: Types.SAVED_INTERESTS, 
      payload: {
        name: '',
      }
    });
  }
}

export default all([
  takeLatest(Types.SAVE_INTERESTS, saveInterests),
]);

