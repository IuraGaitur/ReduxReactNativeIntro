import players from './../../../assets/mocks/players/success.json';

export default class PlayerApiMock {
    getAll() {
        return players;
    }
}