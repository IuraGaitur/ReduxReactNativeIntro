import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Text } from 'native-base';
import PollsBottomNavigationBar from './../../components/PollsBottomNavigationBar';
import PollsScreen from './pollsScreen';
import NewsCategoryToolbar from '../../components/NewsCategoryToolbar';

class PollsMainScreen extends Component {

  render() {
    return (
      <Container>
        <NewsCategoryToolbar />
        <PollsBottomNavigationBar
          myPollsPage={<PollsScreen />}
          favPollsPage={<Text>Favorite polls here</Text>}
        />
      </Container>);
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(PollsMainScreen);