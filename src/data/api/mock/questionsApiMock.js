import question from './../../../assets/mocks/question/question.json';

export default class QuestionsApiMock {
    getAllQuestions() {
        return question;
    }
}