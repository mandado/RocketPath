import { combineReducers } from 'redux';

import ModalReducer from './modal/index';

export default combineReducers({
  modal: ModalReducer,
});
