import { combineReducers } from 'redux';

import ModalReducer from './modal/index';
import Login from './Login';
import Interests from './Interests';
import Path from './Path';

export default combineReducers({
  Login,
  Interests,
  Path,
  modal: ModalReducer,
});
