import { combineReducers } from 'redux';

import ModalReducer from './modal/index';
import Login from './Login';
import Interests from './Interests';

export default combineReducers({
  Login,
  Interests,
  modal: ModalReducer,
});
