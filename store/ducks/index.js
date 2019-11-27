import { combineReducers } from 'redux';

import ModalReducer from './modal/index';
import Login from './Login';

export default combineReducers({
  Login,
  modal: ModalReducer,
});
