import { LOAD_MY_NEWS, ADD_MY_NEWS } from './../../app/actions';

const defaultState = { news: [] };

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case LOAD_MY_NEWS:
      return { ...state, news: action.news };
    case ADD_MY_NEWS:
      return { ...state, news: state.news.concat(action.news) }
    default:
      return state;
  }
}