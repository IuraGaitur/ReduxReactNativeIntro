import UserRepository from './../../data/database/userRepository';
import {NO_USER, INFO_USER} from "../../app/actions";

export const getUser = () => {
    return async (dispatch) => {
        let user = await new UserRepository().getUser();
        setTimeout(async function () {
            return dispatch(user ? infoUser(user) : noExistUser())
        }, 2000);
    }
};

const infoUser = (user) => {
    console.log(' infoUser ')
    return { user: user, type: INFO_USER }
};

const noExistUser = (user) => {
    console.log(' noExistUser ')
    return {user: { email: ' email@test.com ', name: "JOEYSAUCE"}, type: NO_USER };
};