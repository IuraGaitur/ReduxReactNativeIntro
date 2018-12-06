import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image,
    ActivityIndicator,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {Actions} from 'react-native-router-flux';


class PollsUserItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    }
  }

  _actionPollProgress = () => {
    this.setState({ isShown: !this.state.isShown })
  }

  showComments = () => {
    Actions.comments();
  };

  render() {
    const { item } = this.props;
    return (
      <View style={styles.secondContainer}>
        <View style={{ flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 8, alignItems: 'center' }}>
          <View style={{flexDirection: 'row'}}>
            <Image source={{ uri: item.imageUrl }} style={styles.roundIamge} />
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.pollsNameStyle}>{item.userName}</Text>
              <Text style={{ color: "blue", paddingStart: 5, fontSize: 12 }}>in MLB</Text>
            </View>
            </View>
          <Text style={styles.pollsTimeStyle}>{item.timeOnline}</Text>
        </View>
        <Text style={styles.pollsQuestionStyle}>{item.title}</Text>
        <TouchableWithoutFeedback onPress={this._actionPollProgress}>
          <View>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Image source={{ uri: item.imageUrlLeft }} style={styles.squareIamge} />
              <Image source={{ uri: item.imageUrlRight }} style={styles.squareIamge} />
            </View>
            {this.state.isShown &&
              <View style={styles.overlay}>
                <AnimatedCircularProgress
                  size={110}
                  width={3}
                  fill={item.vote1}
                  tintColor="#2196F3"
                  backgroundColor="#3d5875">
                  {
                    (fill) => (
                      <Text style={styles.overlayText}>
                        {item.vote1 + "%"}
                      </Text>
                    )
                  }
                </AnimatedCircularProgress>
                <View style={{ width: 1, height: "100%", backgroundColor: 'silver' }}></View>
                <AnimatedCircularProgress
                  size={110}
                  width={3}
                  fill={item.vote2}
                  tintColor="#2196F3"
                  backgroundColor="#3d5875">
                  {
                    (fill) => (
                      <Text style={styles.overlayText}>
                        {item.vote2 + "%"}
                      </Text>
                    )
                  }
                </AnimatedCircularProgress>
              </View>
            }
          </View>
        </TouchableWithoutFeedback>

        <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 8, paddingTop: 14 }}>
          <Text style={{ fontSize: 15, color: "silver"}}>{item.votes + " VOTES"}</Text>
            <TouchableOpacity
                onPress={() => this.showComments()}
            >
              <Text style={{ fontSize: 15, color: "silver"}}>{item.comments + " COMMENTS"}</Text>
            </TouchableOpacity>
        </View>
        <View style={{width: '100%', height: 1, backgroundColor: '#ccc', marginTop: 16}}/>
      </View >

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
    borderRadius: 25,
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
    color: 'silver'
  },
  pollsQuestionStyle: {
    fontSize: 30,
    color: '#262626',
    textAlign: 'center'
  },
  overlay: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.8,
    alignItems: 'center',
    backgroundColor: 'black',
    width: '100%',
    height: 400,
    justifyContent: 'space-around',
  },
  overlayText: {
    fontSize: 38,
    fontWeight: '500',
    color: 'white'
  },
})

export default connect()(PollsUserItem);