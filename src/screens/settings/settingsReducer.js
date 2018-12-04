import {EMAIL_FAIL, INFO_USER, NAME_FAIL, NO_USER, PASS_FAIL, REGISTER_SUCCESS, SAVE_SETTINGS} from "../../app/actions";

const defaultState = {
    checkedForUser: false,
    emailError: null,
    passError: null,
    nameError: null,
    user: {},
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case INFO_USER: case NO_USER:
            return {...state, user: action.user};
        case EMAIL_FAIL:
            return {...state, emailError: action.message, passError: null, nameError: null};
        case PASS_FAIL:
            return {...state, emailError: null, passError: action.message, nameError: null};
        case NAME_FAIL:
            return {...state, emailError: null, passError: null, nameError: action.message};
        case SAVE_SETTINGS:
            return {...state, user: action.user};
        default:
            return state;
    }
}