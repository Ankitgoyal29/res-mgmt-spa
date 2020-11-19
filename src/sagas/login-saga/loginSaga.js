import { takeLatest, call, put } from 'redux-saga/effects';
import * as loginActions from '../../store/actions/login.actions';

const API = 'http://localhost:8080/api/login/isUserLoggedIn';

export function* isLoggedInWatcher(action) {
    yield takeLatest(loginActions.API_IS_LOGGEDIN_REQUEST, isLoggedInWorker);
}

function getIsUserLoggedIn(email) {
    console.log('inside fetch, email : ', email);
    let fetchUrl = API + '?email=' + email;
    return fetch(fetchUrl)
        .then(response => response.json())
        .then(data => {
            return data;
        })
}

function* isLoggedInWorker(action) {
    try {
        const isUserLoggedIn = yield call(getIsUserLoggedIn(action.email));
        yield put({ type: loginActions.API_IS_LOGGEDIN_SUCCESS, isUserLoggedIn })
    } catch (error) {
        yield put({ type: loginActions.API_IS_LOGGEDIN_FAILURE, error })
    }
} 