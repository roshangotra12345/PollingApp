import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './reducer/rootReducer';
import rootSaga from './saga/rootSaga';
import createSagaMiddleware from '@redux-saga/core';

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
