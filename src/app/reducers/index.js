import { combineReducers } from 'redux';
import authenticationReducer from './../../screens/authentication/authenticationReducer';
import findPlayersReducer from './../../screens/find_players/findPlayersReducer';
import nflNewsReducer from './../../screens/nflNews/nflReducer';
import mlbNewsReducer from './../../screens/mlbNews/mlbReducer';

export default combineReducers({
    authentication: authenticationReducer,
    findPlayers: findPlayersReducer,
    nflNews: nflNewsReducer,
    mlbNews: mlbNewsReducer
})