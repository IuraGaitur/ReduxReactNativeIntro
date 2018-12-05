import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import PollsApi from '../../data/api/pollsApi';

class PollsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { polls: [] }
  }

  async componentDidMount() {
    let polls = await new PollsApi().instance().getAll();
    this.setState({ polls: polls })
  }

  _actionComments() {
    // TODO, do something when user presses on comments
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.polls}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
            <View style={styles.secondContainer}>
              <Image source={{ uri: item.imageUrl }} style={styles.pollsListImageStyle} />
              <View style={styles.textItems}>
                <Text style={styles.pollsPercentageStyle}>{item.answer1 + " | " + item.answer2}</Text>
                <View style={{ flexDirection: 'row', }}>
                  <Text style={styles.pollsVotesCommentsStyle}>{item.votes + " VOTES" + " • "}</Text>
                  <TouchableOpacity onPress={this._actionComments}>
                    <Text style={styles.pollsVotesCommentsStyle}>{item.comments + " COMMENTS"}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          }
          keyExtractor={item => item.keyExtractor}
        />
      </View>
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
  secondContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 18
  },
  textItems: {
    flexDirection: 'column',
    marginStart: 12,
    justifyContent: "center"
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  pollsListImageStyle: {
    height: 100,
    width: 100,
  },
  pollsPercentageStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
  },
  pollsVotesCommentsStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 6
  },
})

export default connect()(PollsScreen);