import mlbNews from './../../../assets/mocks/mlbNews/success.json';

export default class MBLNewsApiMock {
    getAll = async() => {
        return new Promise((resolve, reject) => {
            setTimeout(function() { resolve(mlbNews) })
        })
    }
}