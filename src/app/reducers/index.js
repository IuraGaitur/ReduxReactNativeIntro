import { combineReducers } from 'redux';
import authenticationReducer from './../../screens/authentication/authenticationReducer';

export default combineReducers({
    authentication: authenticationReducer,
})