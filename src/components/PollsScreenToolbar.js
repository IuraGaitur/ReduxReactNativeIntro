import React, { Component } from "react";
import { ToastAndroid, StyleSheet } from "react-native";
import { Header, Button, Left, Right, Body, Icon, View } from "native-base";
import SegmentedControlTab from 'react-native-segmented-control-tab';

export default class PollsScreenToolbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pressStatus: false,
      selectedIndex: 0
    };
  }

  _actionAdd() {
    ToastAndroid.show("Search button clicked!", ToastAndroid.SHORT);
  }

  indexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index
    })
  }

  render() {
    return (
      <Header
        androidStatusBarColor="#66B2FF"
        style={{ backgroundColor: "#66B2FF", color: '#66B2FF' }}>
        <Left>
          <Button transparent >
            <Icon style={{ color: "white" }} name="menu" />
          </Button>
        </Left>
        <Body>
          <View style={styles.middleView}>
            <SegmentedControlTab
              tabStyle={styles.defaultTab}
              tabTextStyle={styles.defaultTabText}
              activeTabStyle={styles.activeTab}
              values={['NFL', 'MLB']}
              selectedIndex={this.state.selectedIndex}
              onTabPress={this.indexChange}
            />
          </View>
        </Body>
        <Right>
          <Button transparent onPress={this._actionAdd}>
            <Icon style={{ color: "white" }} name="add" />
          </Button>
        </Right>
      </Header >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  middleView: {
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: 240
  },
  defaultTab: {
    backgroundColor: 'transparent'
  },
  defaultTabText: {
    color: 'white'
  },
  activeTab: {
    backgroundColor: '#3787D9'
  }
});