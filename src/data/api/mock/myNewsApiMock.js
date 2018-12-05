import myNews from './../../../assets/mocks/myNews/success.json'

export default class MyNewsApiMock {
  getAll = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(function () { resolve(myNews) })
    })
  }
}