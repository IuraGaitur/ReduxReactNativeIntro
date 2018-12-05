import nflNews from './../../../assets/mocks/nflNews/success.json';

export default class NFLNewsApiMock {
    getAll = async() => {
        return new Promise((resolve, reject) => {
            setTimeout(function() { resolve(nflNews) })
        })
    }
}