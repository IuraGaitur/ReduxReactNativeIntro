import React, { Component } from "react";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";

export default class FirstButtons extends Component {
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
    borderColor: "#3787d9",
    width: "90%",
    padding: 5,
    backgroundColor: "#3787d9"
  },
  TextStyle: {
    fontSize: 22,
    textAlign: "center",
    color: "white",
    padding: 10,
    fontWeight: "bold"
  }
});
