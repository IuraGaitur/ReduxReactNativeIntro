import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Title, Button, Left, Body, Right } from "native-base";

export default class NewsCategoryToolbar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header androidStatusBarColor="#66B2FF"
        style={{ backgroundColor: "#66B2FF", color: '#66B2FF' }}>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.backButtonStyle}>BACK</Text>
          </Button>
        </Left>
        <Body style={styles.titleContainer}>
          <Title style={styles.title}>NFL News</Title>
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
  }
})