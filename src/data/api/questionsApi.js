import Constants from "../../utils/constants";
import QuestionsApiMock from "./mock/questionsApiMock";
import QuestionsApiNetwork from "./network/questionsApiNetwork";

export default class PollsApi {
  instance() {
    if (Constants.IS_MOCK || Constants.IS_DEBUG) {
      return new QuestionsApiMock();
    }
    return new QuestionsApiNetwork();
  }
}