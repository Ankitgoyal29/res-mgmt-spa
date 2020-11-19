import { all } from 'redux-saga/effects';
import { isLoggedInWatcher, logInWatcher } from '../sagas/login-saga/loginSaga';

export default function* rootSaga() {
    yield all([
        isLoggedInWatcher(),
        logInWatcher()
    ])
}