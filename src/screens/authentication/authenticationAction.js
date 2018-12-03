import {EMAIL_FAIL, PASS_FAIL, LOGIN_SUCCESS, NAME_FAIL} from '../../app/actions'
import UserRepository from '../../data/database/userRepository';
import {Actions} from 'react-native-router-flux';
import User from './../../data/models/user'

export const loginRequest = (email, pass) => {
        return async (dispatch) => {
                if (!email) return dispatch({message: "Empty email", type: EMAIL_FAIL});
                if (!pass) return dispatch({message: "Empty password", type: PASS_FAIL});
                const userRepository = new UserRepository();
                const user = await userRepository.getPrimaryUser();
                if (user == null || email != user.email) return dispatch({message: "Invalid user", type: PASS_FAIL});
                if (pass != user.password) return dispatch({message: "Invalid user", type: PASS_FAIL});
                Actions.main();
                return dispatch({user: user, type: LOGIN_SUCCESS});
        }
};

export const registerRequest = (name, email, pass) => {
        return async (dispatch) => {
                if (!email) return dispatch({message: "Empty email", type: EMAIL_FAIL});
                if (!pass) return dispatch({message: "Empty password", type: PASS_FAIL});
                if (!name) return dispatch({message: "Empty display name", type: NAME_FAIL});
                const user = new User(name, email, pass);

                await new UserRepository().storeUserData(user);
                Actions.main();
                return {user: user, type: LOGIN_SUCCESS};
        }
}