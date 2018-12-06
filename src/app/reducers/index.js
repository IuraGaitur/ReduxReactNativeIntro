import { combineReducers } from 'redux';
import settingsReducer from "../../screens/settings/settingsReducer";
import authenticationReducer from './../../screens/authentication/authenticationReducer';
import findPlayersReducer from './../../screens/find_players/findPlayersReducer';
import nflNewsReducer from './../../screens/nflNews/nflReducer';
import mlbNewsReducer from './../../screens/mlbNews/mlbReducer';
import myNewsReducer from './../../screens/myNews/myNewsReducer';
import webContentReducer from './../../screens/webSearch/webSearchReducer';

export default combineReducers({
    authentication: authenticationReducer,
    findPlayers: findPlayersReducer,
    nflNews: nflNewsReducer,
    mlbNews: mlbNewsReducer,
    settings: settingsReducer,
    myNews: myNewsReducer,
    findWebContent: webContentReducer
})