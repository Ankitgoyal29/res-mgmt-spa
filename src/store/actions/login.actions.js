export const API_IS_LOGGEDIN_REQUEST = 'API_IS_LOGGEDIN_REQUEST';
export const API_IS_LOGGEDIN_SUCCESS = 'API_IS_LOGGEDIN_SUCCESS';
export const API_IS_LOGGEDIN_FAILURE = 'API_IS_LOGGEDIN_FAILURE';

export const API_LOGIN_REQUEST = 'API_LOGIN_REQUEST';
export const API_LOGIN_SUCCESS = 'API_LOGIN_SUCCESS';
export const API_LOGIN_FAILURE = 'API_LOGIN_FAILURE';

export function isUserLoggedIn(email) {
    return {
        type: API_IS_LOGGEDIN_REQUEST
    }
}

export function isUserLoggedInSucceeded(isUserLoggedIn) {
    console.log('call', isUserLoggedIn);
    return {
        type: API_IS_LOGGEDIN_SUCCESS,
        isUserLoggedIn
    }
}

export function isUserLoggedInFailed(error) {
    return {
        type: API_IS_LOGGEDIN_FAILURE,
        error
    }
}

export function logIn(loginRequest) {
    return {
        type: API_LOGIN_REQUEST,
        loginRequest
    }
}

export function logInSucceeded(isUserLoggedIn) {
    debugger;
    return {
        type: API_LOGIN_SUCCESS,
        isUserLoggedIn
    }
}

export function logInFailed(error) {
    return {
        type: API_LOGIN_FAILURE,
        error
    }
}