import { takeLatest, call, put } from 'redux-saga/effects';
import * as loginActions from '../../store/actions/login.actions';
import axios from 'axios';

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
        debugger;
        yield put({ type: loginActions.API_IS_LOGGEDIN_SUCCESS, isUserLoggedIn })
    } catch (error) {
        yield put({ type: loginActions.API_IS_LOGGEDIN_FAILURE, error })
    }
}


export function* logInWatcher(action) {
    debugger;
    yield takeLatest(loginActions.API_LOGIN_REQUEST, logInWorker);
}

function postLogIn(loginRequest) {
    return axios.post(loginBaseUrl, loginRequest)
        .then(response => response.data)
        .catch(error => { throw error; })
}

function* logInWorker(action) {
    try {
        // debugger;
        // const logIn = yield call(postLogIn(action.loginRequest));
        // // yield put(loginActions.isUserLoggedInSucceeded(true))
        // debugger;
        yield put({ type: loginActions.API_LOGIN_SUCCESS, isUserLoggedIn: true });
        // const loginSucceededAction = loginActions.logInSucceeded(true);
        // yield put(loginSucceededAction);
        // debugger;

    } catch (error) {
        yield put(loginActions.logInFailed('Error occured at server'))
    }
}