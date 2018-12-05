import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, ActivityIndicator, TouchableWithoutFeedback } from 'react-native';
import { Container } from 'native-base';
import { connect } from 'react-redux'
import QuestionsApi from '../../data/api/questionsApi';
import PollsScreenToolbar from '../../components/PollsScreenToolbar';
import PollsUserItem from './pollsUserItem';

class PollsUserScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      loading: false,
      items: null,
    }
  }

  async componentDidMount() {
    let questions = await new QuestionsApi().instance().getAllQuestions();
    this.setState(questions)
  }

  fetchData = async () => {
    this.setState({ loading: true });
    let questions = await new QuestionsApi().instance().getAllQuestions();
    this.setState(state => ({ questions: [...state.questions, ...questions], loading: false }));
  };

  render() {
    return (
      <Container>
        <PollsScreenToolbar />
        <View style={styles.container}>
          <FlatList
            data={this.state.questions}
            showsVerticalScrollIndicator={false}
            onEndReached={() => this.loadMore()}
            ListFooterComponent={() => this.state.loading ? null : <ActivityIndicator size="large" animating />}
            renderItem={({ item }) =>
              <PollsUserItem item={item} />
            }
            keyExtractor={item => item.keyExtractor}
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingStart: 12,
    paddingEnd: 12,
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  roundIamge: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  squareIamge: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 400,
    backgroundColor: '#fff',
  },
  secondContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 18,
    justifyContent: 'center'
  },
  pollsListImageStyle: {
    height: 100,
    width: 100,
  },
  pollsNameStyle: {
    marginTop: 8,
    fontSize: 15,
    paddingStart: 5,
    color: '#262626'
  },
  pollsTimeStyle: {
    fontSize: 15,
    paddingStart: 150,
    color: 'silver'
  },
  pollsQuestionStyle: {
    fontSize: 30,
    color: '#262626',
    textAlign: 'center'
  },
})

export default connect()(PollsUserScreen);