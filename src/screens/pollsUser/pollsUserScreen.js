import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, ActivityIndicator, TouchableWithoutFeedback } from 'react-native';
import {Button, Container, Icon} from 'native-base';
import { connect } from 'react-redux'
import QuestionsApi from '../../data/api/questionsApi';
import PollsScreenToolbar from '../../components/PollsScreenToolbar';
import PollsUserItem from './pollsUserItem';
import MainScreenToolbar from "../../components/MainScreenToolbar";
import {Actions} from "react-native-router-flux";

class PollsUserScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      loading: false,
      items: null,
      headerHeight: 88,
    }
  }

  measureToolbar = (e) => {
      this.setState({ headerHeight: e.nativeEvent.layout.height })
  };

  async componentDidMount() {
    let questions = await new QuestionsApi().instance().getAllQuestions();
    this.setState({questions: questions})
  }

  fetchData = async () => {
    this.setState(  { loading: true });
    let questions = await new QuestionsApi().instance().getAllQuestions();
    this.setState(state => ({ questions: [...state.questions, ...questions], loading: false }));
  };

    _actionAdd() {
        Actions.addPolls();
    }

  render() {
    return (
      <Container>
        <View style={{ flex: 0 }} >
            <MainScreenToolbar showTitle={false}
                               rightActions={
                                    <Button transparent onPress={this._actionAdd}>
                                     <Icon style={{ color: "white" }} name="add" />
                                    </Button>}
                               actionOnMeasure={this.measureToolbar}/>
        </View>
        <View style={[styles.container, { height: '100%', position: 'absolute', zIndex: -1, paddingTop: this.state.headerHeight }]}>
          <FlatList
            data={this.state.questions}
            showsVerticalScrollIndicator={false}
            onEndReached={() => this.loadMore()}
            ListFooterComponent={() => this.state.loading ? null : <ActivityIndicator size="large" animating />}
            renderItem={({ item }) =>
              <PollsUserItem item={item} />
            }
            keyExtractor = { (item, index) => { return index.toString() }}
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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