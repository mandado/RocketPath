import {
  all, takeLatest, put
} from 'redux-saga/effects';
import { Types } from '../../ducks/Interests';
import { Types as TypesLogin } from '../../ducks/Login';
import { api } from '../../../services/api';
import ls from 'local-storage';

const shuffle = function(array) {
  var arrayCopy = array;
  var i = arrayCopy.length, j, temp;
  if ( i == 0 ) return array;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = arrayCopy[i];
     arrayCopy[i] = arrayCopy[j];
     arrayCopy[j] = temp;
  }
  return arrayCopy;
}

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

function* readInterests(){
  try {
    const { data } = yield api.get('/interests');
    
    yield put({type: Types.SET_INTERESTS, payload: { interests: shuffle(data).slice(0,8)}})
  } catch (error) {
    
  }
}

export default all([
  takeLatest(Types.SAVE_INTERESTS, saveInterests),
  takeLatest(Types.READ_INTERESTS, readInterests),
]);

