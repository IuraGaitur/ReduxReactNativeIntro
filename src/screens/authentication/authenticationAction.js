import {EMAIL_FAIL, PASS_FAIL, LOGIN_SUCCESS, NAME_FAIL} from '../../app/actions'
import UserRepository from '../../data/database/userRepository';
import {Actions} from 'react-native-router-flux';
import User from './../../data/models/user'

export const loginRequest = (email, pass) => {
        if (!email) return {message: "Empty email", type: EMAIL_FAIL};
        if (!pass) return {message: "Empty password", type: PASS_FAIL};
        const user = new UserRepository().getPrimaryUser();
        if (email != user.email) return {message: "Invalid email", type: EMAIL_FAIL};
        if (pass != user.pass) return {message: "Invalid password", type: PASS_FAIL};
        Actions.main();

        return {user: {email: email}, type: LOGIN_SUCCESS};
};

export const registerRequest = (name, email, pass) => {
        if (!email) return {message: "Empty email", type: EMAIL_FAIL};
        if (!pass) return {message: "Empty password", type: PASS_FAIL};
        if (!name) return {message: "Empty display name", type: NAME_FAIL};
        const user = new User(name, email, pass);
        
        // await new UserRepository().savePrimaryUser(usr);
        // let user = await new UserRepository().getPrimaryUser();

        Actions.main();
        return {user: user, type: LOGIN_SUCCESS};
}