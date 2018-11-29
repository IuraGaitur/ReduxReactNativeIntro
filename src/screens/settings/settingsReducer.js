import {INFO_USER, NO_USER} from "../../app/actions";

const defaultState = {
    checkedForUser: false,
    user: {},
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case INFO_USER: case NO_USER:
            return {...state, user: action.user};
        default:
            return state;
    }
}