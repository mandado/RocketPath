import { combineReducers } from 'redux';

import ModalReducer from './modal/index';
import Login from './Login';
import Interests from './Interests';
import Challenge from './Challenge';
import Path from './Path';

export default combineReducers({
  Login,
  Interests,
  Challenge,
  Path,
  modal: ModalReducer,
});
