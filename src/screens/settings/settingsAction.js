import UserRepository from './../../data/database/userRepository';
import {NO_USER, INFO_USER, EMAIL_FAIL, PASS_FAIL, NAME_FAIL, SAVE_SETTINGS} from "../../app/actions";

export const getUser = () => {
    return async (dispatch) => {
        let user = await new UserRepository().getUser();
        setTimeout(async function () {
            return dispatch(user ? infoUser(user) : noExistUser())
        }, 100);
    }
};

export const updateUser = (user) => {
    return async (dispatch) => {
        if (!user.email) return dispatch({message: "Empty email", type: EMAIL_FAIL});
        if (!user.pass) return dispatch({message: "Empty password", type: PASS_FAIL});
        if (!user.name) return dispatch({message: "Empty display name", type: NAME_FAIL});
        await new UserRepository().storeUserData(user);
        return dispatch({user: user, type: SAVE_SETTINGS});
    }
}

const infoUser = (user) => {
    return { user: user, type: INFO_USER }
};

const noExistUser = () => {
    return {user: {}, type: NO_USER };
};