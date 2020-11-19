import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { isLoggedInWatcher } from '../sagas/login-saga/loginSaga';
import reducer from './reducers/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(isLoggedInWatcher);

export default store;