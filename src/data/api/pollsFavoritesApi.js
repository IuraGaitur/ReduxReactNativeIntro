import Constants from "../../utils/constants";
import PollsFavoritesApiMock from "./mock/pollsFavoritesMock";
import PollsFavoritesApiNetwork from "./network/pollsFavoritesApiNetwork";

export default class PollsFavoritesApi {
  instance() {
    if (Constants.IS_MOCK || Constants.IS_DEBUG) {
      return new PollsFavoritesApiMock();
    }
    return new PollsFavoritesApiNetwork();
  }
}