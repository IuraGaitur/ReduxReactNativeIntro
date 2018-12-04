import Constants from "../../utils/constants";
import PollsApiMock from "./mock/pollsApiMock";
import PollsApiNetwork from "./network/pollsApiNetwork";

export default class PollsApi {
  instance() {
    if (Constants.IS_MOCK || Constants.IS_DEBUG) {
      return new PollsApiMock();
    }
    return new PollsApiNetwork();
  }
}