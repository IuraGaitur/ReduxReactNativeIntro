import { LOAD_NFL_NEWS } from './../../app/actions';

const defaultState = { news: [] };

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case LOAD_NFL_NEWS: 
            return { ...state, news: action.news };
        default: 
            return state;
    }
}