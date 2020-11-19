import * as loginActions from '../../store/actions/login.actions';

const initialState = {
    loading: false,
    data: null,
    error: null
};

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case loginActions.API_IS_LOGGEDIN_REQUEST:
            return { ...state, loading: true, error: null };
        case loginActions.API_IS_LOGGEDIN_SUCCESS:
            return { ...state, loading: false, data: action.data };
        case loginActions.API_IS_LOGGEDIN_FAILURE:
            return { ...state, loading: false, data: null, error: action.error };
        default:
            return state;
    }
}