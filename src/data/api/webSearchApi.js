import Constants from "../../utils/constants";
import WebSearchApiNetwork from "./network/webSearchApiNetwork";
import WebSearchApiMock from "./mock/webSearchApiMock";

export default class WebSearchApi {
  instance() {
    if (Constants.IS_MOCK || Constants.IS_DEBUG) {
      return new WebSearchApiMock();
    }
    return new WebSearchApiNetwork();
  }
}