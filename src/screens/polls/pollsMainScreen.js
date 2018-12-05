import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, View, Text } from 'native-base';
import PollsBottomNavigationBar from './../../components/PollsBottomNavigationBar';
import PollsScreen from './pollsScreen';
import PollsScreenToolbar from '../../components/PollsScreenToolbar';

class PollsMainScreen extends Component {

  render() {
    return (
      <Container>
        <PollsScreenToolbar />
        <PollsBottomNavigationBar
          myPollsPage={<PollsScreen />}
          favPollsPage={<View>
            <Text>Favorite Polls</Text>
          </View>}
        />
      </Container>);
  }
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(PollsMainScreen);