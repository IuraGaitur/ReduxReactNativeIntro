import {EMAIL_FAIL, PASS_FAIL, LOGIN_SUCCESS} from './../../app/actions'
import {Actions} from 'react-native-router-flux';

export const loginRequest = (email, pass) => {
        if (!email) return {message: "Empty email", type: EMAIL_FAIL};
        if (!pass) return {message: "Empty password", type: PASS_FAIL};
        Actions.main();

        return {user: {email: email}, type: LOGIN_SUCCESS};
};