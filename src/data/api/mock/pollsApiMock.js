import polls from './../../../assets/mocks/polls/success.json';

export default class PollsApiMock {
    getAllPolls() {
        return polls;
    }
}