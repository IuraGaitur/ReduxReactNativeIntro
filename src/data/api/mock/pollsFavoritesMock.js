import fav_polls from './../../../assets/mocks/favorite_polls/success.json';

export default class PollsFavoritesApiMock {
    getAll() {
        return fav_polls;
    }
}