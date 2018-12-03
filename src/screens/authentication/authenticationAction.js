import {EMAIL_FAIL, PASS_FAIL, LOGIN_SUCCESS, NAME_FAIL} from '../../app/actions'
import UserRepository from '../../data/database/userRepository';
import {Actions} from 'react-native-router-flux';
import User from './../../data/models/user'

export const loginRequest = (email, pass) => {
        return async (dispatch) => {
                console.log("asdfg" + pass);
                if (!email) return {message: "Empty email", type: EMAIL_FAIL};
                if (!pass) return {message: "Empty password", type: PASS_FAIL};
                // const user = new UserRepository().getPrimaryUser();
                const userRepository = new UserRepository();
                var user = await userRepository.getPrimaryUser();
                console.log(user);
                if (email != user.email) return {message: "Invalid email", type: EMAIL_FAIL};
                console.log(user.password);
                if (pass != user.password) return {message: "Invalid password", type: PASS_FAIL};
                console.log("asdfg" + pass);
                Actions.main();
                console.log(user);

                return {user: user, type: LOGIN_SUCCESS};
        }
};

export const registerRequest = (name, email, pass) => {
        if (!email) return {message: "Empty email", type: EMAIL_FAIL};
        if (!pass) return {message: "Empty password", type: PASS_FAIL};
        if (!name) return {message: "Empty display name", type: NAME_FAIL};
        const user = new User(name, email, pass);
        var repository = new UserRepository();
        repository.storeUserData(user);
        Actions.main();
        return {user: user, type: LOGIN_SUCCESS};
}