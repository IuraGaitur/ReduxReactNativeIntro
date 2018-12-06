import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import { ListItem } from "native-base";

export default class WebSearchItem extends Component {

  render() {
    return (
      <ListItem noBorder contentContainerStyle={styles.list}>
        <Image source={this.props.item.logo} style={styles.bodyItem} />
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bodyItem: {
    width: 100,
    height: 180,
  },
});