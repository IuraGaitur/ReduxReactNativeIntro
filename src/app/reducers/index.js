import { combineReducers } from 'redux';
import loginReducer from './../../screens/login/loginReducer';
import settingsReducer from "../../screens/settings/settingsReducer";

export default combineReducers({
    login: loginReducer,
    settings: settingsReducer
})