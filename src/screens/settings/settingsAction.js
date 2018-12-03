import UserRepository from './../../data/database/userRepository';
import {NO_USER, INFO_USER, EMAIL_FAIL, PASS_FAIL, NAME_FAIL, LOGIN_SUCCESS, SAVE_SETTINGS} from "../../app/actions";
import User from "../../data/models/user";
import {Actions} from "react-native-router-flux";

export const getUser = () => {
    return async (dispatch) => {
        let user = await new UserRepository().getUser();
        setTimeout(async function () {
            return dispatch(user ? infoUser(user) : noExistUser())
        }, 2000);
    }
};

export const updateRequest = (name, email, pass) => {
    return async (dispatch) => {
        if (!email) return dispatch({message: "Empty email", type: EMAIL_FAIL});
        if (!pass) return dispatch({message: "Empty password", type: PASS_FAIL});
        if (!name) return dispatch({message: "Empty display name", type: NAME_FAIL});
        const user = new User(name, email, pass);

        await new UserRepository().storeUserData(user);
        Actions.main();
        return {user: user, type: SAVE_SETTINGS};
    }
}

const infoUser = (user) => {
    console.log(' infoUser ')
    return { user: user, type: INFO_USER }
};

const noExistUser = (user) => {
    console.log(' noExistUser ')
    return {user: { email: ' email@test.com ', name: "JOEYSAUCE"}, type: NO_USER };
};