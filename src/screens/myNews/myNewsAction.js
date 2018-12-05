import { LOAD_MY_NEWS, ADD_MY_NEWS } from './../../app/actions';
import MyNewsApi from '../../data/api/myNewsApi';

export const getAllNews = () => {
  return async (dispatch) => {
    const news = await new MyNewsApi().instance().getAll();
    return dispatch({ type: LOAD_MY_NEWS, news });
  }
}

export const addMoreNews = () => {
  return async (dispatch) => {
    const news = await new MyNewsApi().instance().getAll();
    return dispatch({ type: ADD_MY_NEWS, news });
  }
}