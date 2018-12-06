import { LOAD_WEB_CONTENT } from './../../app/actions';
import WebSearchApi from '../../data/api/webSearchApi';

export const getAllWebContent = () => {
  return async (dispatch) => {
    const webContent = await new WebSearchApi().instance().getAll();
    return dispatch({ type: LOAD_WEB_CONTENT, webContent });
  }
}