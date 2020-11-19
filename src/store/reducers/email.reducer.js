import * as emailActions from '../../store/actions/email.actions';

const initialState = {
    data: null
};

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case emailActions.API_GET_USER_EMAIL:
        default:
            return state;
    }
}