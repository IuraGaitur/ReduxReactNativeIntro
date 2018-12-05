import { LOAD_MLB_NEWS, ADD_MLB_NEWS } from './../../app/actions';

const defaultState = { news: [] };

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case LOAD_MLB_NEWS:
            return { ...state, news: action.news };
        case ADD_MLB_NEWS:
            return { ...state, news: state.news.concat(action.news) }
        default: 
            return state;
    }
}