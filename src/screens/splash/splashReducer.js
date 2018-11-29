import {IS_LOGGED_IN, NO_USER} from 'src/app/actions';

const defaultState = {
    checkedForUser: false,
    user: null,
};

export default function reducer(state = defaultState, action) {

    switch (action.type) {
        case IS_LOGGED_IN:
            return {...state, checkedForUser: true, user: action.user, loggedIn: true};
        case NO_USER:
            return {...state, checkedForUser: true, user: null, loggedIn: false};
        default:
            return state;
    }
}