import news from './../../../assets/mocks/news/success.json';

export default class NewsApiMock {
  getNews() {
    return news;
  }
}