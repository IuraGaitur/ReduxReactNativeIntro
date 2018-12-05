import Constants from "../../utils/constants";
import NewsApiMock from "./mock/newsApiMock";
import NewsApiNetwork from "./network/newsApiNetwork";

export default class NewsApi {
  instance() {
    if (Constants.IS_MOCK || Constants.IS_DEBUG) {
      return new NewsApiMock();
    }
    return new NewsApiNetwork();
  }
}