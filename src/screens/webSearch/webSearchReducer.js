import { LOAD_WEB_CONTENT } from './../../app/actions';

const defaultState = {
  webContent: []
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case LOAD_WEB_CONTENT:
      return { ...state, webContent: action.webContent };
    default:
      return state;
  }
}