import * as loginActions from '../../store/actions/login.actions';

const initialState = {
    isUserLoggedIn: false,
    email: '',
    error: ''
};

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case loginActions.API_IS_LOGGEDIN_SUCCESS:
        case loginActions.API_LOGIN_SUCCESS:
            console.log('red');
            return Object.assign({}, state, { isUserLoggedIn: action.isUserLoggedIn });
        // case loginActions.API_LOGIN_SUCCESS:
        //     return state.set('email', action.email);
        case loginActions.API_IS_LOGGEDIN_FAILURE:
            return { ...state, loading: false, data: null, error: action.error };
        default:
            return state;
    }
}