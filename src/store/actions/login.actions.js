export const API_IS_LOGGEDIN_REQUEST = 'API_IS_LOGGEDIN_REQUEST';
export const API_IS_LOGGEDIN_SUCCESS = 'API_IS_LOGGEDIN_SUCCESS';
export const API_IS_LOGGEDIN_FAILURE = 'API_IS_LOGGEDIN_FAILURE';

export function isUserLoggedIn(email) {
    return {
        type: API_IS_LOGGEDIN_REQUEST,
        email
    }
}