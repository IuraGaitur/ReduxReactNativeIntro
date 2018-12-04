import {LOAD_PLAYERS} from './../../app/actions';
import PlayerApi from './../../data/api/playerApi';

export const getAllPlayers = () => {
    return async (dispatch) => {
        const players = await new PlayerApi().instance().getAll();
        return dispatch({type: LOAD_PLAYERS, players});
    }
}