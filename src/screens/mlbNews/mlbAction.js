import { LOAD_MLB_NEWS, ADD_MLB_NEWS } from './../../app/actions';
import MLBNewsApi from '../../data/api/mlbNewsApi';

export const getAllNews = () => {
    return async(dispatch) => {
        const news = await new MLBNewsApi().instance().getAll();
        return dispatch({ type: LOAD_MLB_NEWS, news });
    }
}

export const addMoreNews = () => {
    return async(dispatch) => {
        const news = await new MLBNewsApi().instance().getAll();
        return dispatch({ type: ADD_MLB_NEWS, news });
    }
}