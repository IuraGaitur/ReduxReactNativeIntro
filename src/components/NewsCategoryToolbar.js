import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Title, Button, Left, Body, Right } from "native-base";
import {Actions} from 'react-native-router-flux';
import SegmentedControlTab from "react-native-segmented-control-tab";

export default class NewsCategoryToolbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pressStatus: false,
            selectedIndex: 0,
            menuIsVisible: true
        };
    }

    indexChange = (index) => {
        this.setState({
            ...this.state,
            selectedIndex: index
        })
    }

  render() {
    return (
      <Header androidStatusBarColor="#66B2FF"
        style={{ backgroundColor: "#66B2FF", color: '#66B2FF' }}>
        <Left>
          <Button transparent onPress={() => Actions.pop()}>
            <Text style={styles.backButtonStyle}>{this.props.backTitle ? this.props.backTitle : "BACK"}</Text>
          </Button>
        </Left>
        <Body style={styles.titleContainer}>
          <View style={styles.middleView}>
            {this.props.showTitle && <Title style={{color: 'white'}}>{this.props.title}</Title>}
            {!this.props.showTitle && <SegmentedControlTab
                tabStyle={styles.defaultTab}
                tabTextStyle={styles.defaultTabText}
                activeTabStyle={styles.activeTab}
                values={['NFL', 'MLB']}
                selectedIndex={this.state.selectedIndex}
                onTabPress={this.indexChange}
            />}
          </View>
        </Body>
        <Right></Right>
      </Header>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    backgroundColor: '#66B2FF',
    alignItems: 'center',
    padding: 8,
    textAlign: 'center'
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: '400',
    textAlign: 'center'
  },
  backButtonStyle: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500'
  },
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
  },
  menuItem: {
      flex: 1,
      textAlign: 'center',
      color: 'white',
      fontSize: 24
  }
})