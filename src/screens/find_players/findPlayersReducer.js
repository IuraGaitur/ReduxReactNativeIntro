import {LOAD_PLAYERS} from './../../app/actions';

const defaultState = {
    players: []
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case LOAD_PLAYERS:
            return {...state, players: action.players};
        default:
            return state;
    }
}