import Constants from '../../utils/constants';
import NFLNewsApiMock from './mock/nflNewsApiMock';
import NFLNewsApiNetwork from './network/nflNewsApiNetwork';

export default class NFLNewsApi {
    instance() {
        if (Constants.IS_MOCK || Constants.IS_DEBUG) {
            return new NFLNewsApiMock();
        }
        return new NFLNewsApiNetwork();
    }
}