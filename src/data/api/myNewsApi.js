import Constants from '../../utils/constants';
import MyNewsApiMock from './mock/myNewsApiMock';
import MyNewsApiNetwork from './network/myNewsApiNetwork';

export default class MyNewsApi {
    instance() {
        if (Constants.IS_MOCK || Constants.IS_DEBUG) {
            return new MyNewsApiMock();
        }
        return new MyNewsApiNetwork();
    }
}