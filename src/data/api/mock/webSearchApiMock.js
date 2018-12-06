import webContent from './../../../assets/mocks/webSearch/success.json';

export default class WebSearchApiMock {
  getAll = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(webContent);
      }, 300);
    });
  }
}