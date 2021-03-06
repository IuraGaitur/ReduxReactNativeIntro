import { LOAD_NFL_NEWS, ADD_NFL_NEWS } from './../../app/actions';
import NFLNewsApi from '../../data/api/nflNewsApi';

export const getAllNews = () => {
    return async(dispatch) => {
        const news = await new NFLNewsApi().instance().getAll();
        return dispatch({ type: LOAD_NFL_NEWS, news });
    }
}

export const addMoreNews = () => {
    return async(dispatch) => {
        const news = await new NFLNewsApi().instance().getAll();
        return dispatch({ type: ADD_NFL_NEWS, news });
    }
}