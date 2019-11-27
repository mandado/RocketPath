import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

const middlewares = [];

export default (initialState) => {
  const sagaMiddleware = createSagaMiddleware();

  middlewares.push(sagaMiddleware);

  const composer = compose(applyMiddleware(...middlewares));
  const store = createStore(reducers, initialState, composer);

  sagaMiddleware.run(sagas);
  
  return store;
};
