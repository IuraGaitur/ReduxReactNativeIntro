import { combineReducers } from 'redux';
import authenticationReducer from './../../screens/authentication/authenticationReducer';
import findPlayersReducer from './../../screens/find_players/findPlayersReducer';

export default combineReducers({
    authentication: authenticationReducer,
    findPlayers: findPlayersReducer
})