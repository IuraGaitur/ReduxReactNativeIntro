import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class PollsScreen extends Component {

  state = {
    polls: []
  }

  async componentDidMount() {
    //const polls = await ajax.fetchPolls();
    //this.setState({polls});
  }

  _actionComments() {
    // TODO, do something when user presses on comments
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[{ pollsPercentage: "25% | 75%", pollsVotes: '130 VOTES', pollsComments: '100 COMMENTS' },
          { pollsPercentage: "25% | 75%", pollsVotes: '130 VOTES', pollsComments: '100 COMMENTS' },
          { pollsPercentage: "25% | 75%", pollsVotes: '130 VOTES', pollsComments: '100 COMMENTS' },
          { pollsPercentage: "25% | 75%", pollsVotes: '130 VOTES', pollsComments: '100 COMMENTS' },
          { pollsPercentage: "25% | 75%", pollsVotes: '130 VOTES', pollsComments: '100 COMMENTS' },
          { pollsPercentage: "25% | 75%", pollsVotes: '130 VOTES', pollsComments: '100 COMMENTS' },
          { pollsPercentage: "25% | 75%", pollsVotes: '130 VOTES', pollsComments: '100 COMMENTS' },
          { pollsPercentage: "25% | 75%", pollsVotes: '130 VOTES', pollsComments: '100 COMMENTS' },
          { pollsPercentage: "25% | 75%", pollsVotes: '130 VOTES', pollsComments: '100 COMMENTS' }]}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 18 }}>
              <Image source={require('../../assets/rugby.jpg')} style={styles.pollsListImageStyle} />
              <View style={{ flexDirection: 'column', marginStart: 12, justifyContent: "center" }}>
                <Text style={styles.pollsPercentageStyle}>{item.pollsPercentage}</Text>
                <View style={{ flexDirection: 'row', }}>
                  <Text style={styles.pollsVotesCommentsStyle}>{item.pollsVotes + " • "}</Text>
                  <TouchableOpacity onPress={this._actionComments}>
                    <Text style={styles.pollsVotesCommentsStyle}>{item.pollsComments}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          }
          keyExtractor={item => item.email}
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