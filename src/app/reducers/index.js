import { combineReducers } from 'redux';
import loginReducer from './../../screens/login/loginReducer';

export default combineReducers({
    login: loginReducer,
})