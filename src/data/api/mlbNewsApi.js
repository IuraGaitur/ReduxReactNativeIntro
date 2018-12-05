import Constants from './../../utils/constants';
import MLBNewsApiMock from './mock/mlbNewsApiMock';
import MLBNewsApiNetwork from './network/mlbNewsApiNetwork';

export default class MLBNewsApi {
    instance() {
        if (Constants.IS_MOCK || Constants.IS_DEBUG) {
            return new MLBNewsApiMock();
        }
        return new MLBNewsApiNetwork();
    }
}