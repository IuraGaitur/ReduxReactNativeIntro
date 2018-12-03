import { combineReducers } from 'redux';
import settingsReducer from "../../screens/settings/settingsReducer";
import authenticationReducer from './../../screens/authentication/authenticationReducer';

export default combineReducers({
    authentication: authenticationReducer,
    settings: settingsReducer,
})