import React, { Component } from "react";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";

export default class Buttons extends Component {
  render() {
    return (
      <View style={styles.TextViewStyle}>
        <Text style={styles.TextStyle}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TextViewStyle: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: "#bfbfbf",
    width: "90%",
    padding: 5
  },
  TextStyle: {
    fontSize: 22,
    textAlign: "center",
    color: "#bfbfbf",
    padding: 10,
    fontWeight: "bold"
  }
});
