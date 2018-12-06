import React, { Component } from 'react';
import { Text, StyleSheet, applyLetterSpacing, StackNavigator } from 'react-native';
import { Header, Title, Button, Left, Body, Right, View } from "native-base";
import { Actions } from 'react-native-router-flux';

export default class WebSearchToolbar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header
        androidStatusBarColor="#66B2FF"
        style={{ backgroundColor: "#66B2FF", color: '#66B2FF' }}>
        <Left>
          <Button transparent onPress={() => Actions.pop()}>
            <Text style={styles.backButtonStyle}>BACK</Text>
          </Button>
        </Left>
        <Body>
          <View style={styles.middleView}>
            <Text style={styles.title}>Web Search</Text>
          </View>
        </Body>
        <Right>
          <View></View>
        </Right>
      </Header >
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: 'bold',
  },
  backButtonStyle: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
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
})