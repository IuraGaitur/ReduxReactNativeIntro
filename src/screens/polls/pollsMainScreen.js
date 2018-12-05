import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Text } from 'native-base';
import PollsBottomNavigationBar from './../../components/PollsBottomNavigationBar';
import PollsScreen from './pollsScreen';
import NewsCategoryToolbar from '../../components/NewsCategoryToolbar';
import PollsFavoriteScreen from './pollsFavoriteScreen';

class PollsMainScreen extends Component {

  render() {
    return (
      <Container>
        <NewsCategoryToolbar
          navigation={this.props.navigation} />
        <PollsBottomNavigationBar
          myPollsPage={<PollsScreen />}
          favPollsPage={<PollsFavoriteScreen />}
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