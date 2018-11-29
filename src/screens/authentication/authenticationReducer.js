import {LOGIN_SUCCESS, EMAIL_FAIL, PASS_FAIL, NAME_FAIL, REGISTER_SUCCESS} from './../../app/actions';


const defaultState = {
    emailError: null,
    passError: null,
    nameError: null
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case EMAIL_FAIL:
            return {...state, emailError: action.message, passError: null};
        case PASS_FAIL:
            return {...state, emailError: null, passError: action.message};
        case NAME_FAIL:
            return {...state, emailError: null, passError: null, nameError: action.message};
        case LOGIN_SUCCESS:
            return {...state, user: action.user};
        case REGISTER_SUCCESS:
            console.log(state);
            return {...state, user: action.user};
        default:
            return state;
    }
}