import { combineReducers } from 'redux';

import ModalReducer from './modal/index';
import Login from './Login';
import Interests from './Interests';
import Challenge from './Challenge';

export default combineReducers({
  Login,
  Interests,
  Challenge,
  modal: ModalReducer,
});
