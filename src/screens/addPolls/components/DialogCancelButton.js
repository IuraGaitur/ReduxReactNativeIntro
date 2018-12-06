import React, { Component } from "react";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";

export default class CancelButtons extends Component {
    render() {
      return (
        <View style={styles.CancelTextViewStyle}>
          <Text style={styles.CancelTextStyle}>{this.props.name}</Text>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
 
    CancelTextViewStyle: {
      borderWidth: 1,
      borderRadius: 1,
      borderColor: "#bfbfbf",
      width: "90%",
      padding: 5,
      backgroundColor: "#bfbfbf"
    },
    CancelTextStyle: {
      fontSize: 22,
      textAlign: "center",
      color: "white",
      padding: 10,
      fontWeight: "bold"
    }
  });