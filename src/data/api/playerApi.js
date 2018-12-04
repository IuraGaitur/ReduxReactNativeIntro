import Constants from "../../utils/constants";
import PlayerApiMock from "./mock/playerApiMock";
import PlayerApiNetwork from "./network/playerApiNetwork";

export default class PlayerApi {
  instance() {
    if (Constants.IS_MOCK || Constants.IS_DEBUG) {
      return new PlayerApiMock();
    }
    return new PlayerApiNetwork();
  }
}