import { takeLatest, call, put } from 'redux-saga/effects';
import * as loginActions from '../../store/actions/login.actions';

const loginBaseUrl = 'http://localhost:8080/api/login';

export function* isLoggedInWatcher(action) {
    yield takeLatest(loginActions.API_IS_LOGGEDIN_REQUEST, isLoggedInWorker);
}

function getIsUserLoggedIn(email) {
    let fetchUrl = `${loginBaseUrl}/isUserLoggedIn?email=${email}`;
    return fetch(fetchUrl)
        .then(response => {
            if (response.status === 400) {
                throw response;
            } else {
                response.json().then(json => {
                    return json
                })
            }
        })
}

function* isLoggedInWorker(action) {
    try {
        const isUserLoggedIn = action.email ? yield call(getIsUserLoggedIn(action.email)) : false;
        yield put({ type: loginActions.API_IS_LOGGEDIN_SUCCESS, isUserLoggedIn })
    } catch (error) {
        yield put({ type: loginActions.API_IS_LOGGEDIN_FAILURE, error })
    }
}


export function* logInWatcher(action) {
    yield takeLatest(loginActions.API_LOGIN_REQUEST, logInWorker);
}

function postLogIn(loginRequest) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginRequest)
    };
    return fetch(loginBaseUrl, requestOptions)
        .then(response => response.json())
        .then(data => data)
    // .then(response => {
    //     if (response.status === 400) {
    //         throw response;
    //     } else {
    //         response.json().then(json => {
    //             return json
    //         })
    //     }
    // })
}

function* logInWorker(action) {
    try {
        const response = action.loginRequest ? yield call(postLogIn(action.loginRequest)) : false;
        yield put(loginActions.isUserLoggedInSucceeded(true))
        yield put(loginActions.logInSucceeded(true))
    } catch (error) {
        yield put(loginActions.logInFailed('Error occured at server'))
    }
}