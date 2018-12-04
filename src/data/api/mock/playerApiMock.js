import players from './../../../assets/mocks/players/success.json';

export default class PlayersApiMock {
    getAll = async() => {
            return new Promise((resolve, reject) => {
                setTimeout(function () {
                    resolve(players);
            }, 500);
        });
    }
}