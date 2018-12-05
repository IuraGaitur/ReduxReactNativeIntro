import React, { Component } from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";
import { Container, Button, Text } from "native-base";
import { connect } from "react-redux";
import QuestionsApi from "../../data/api/questionsApi";

class AddPollsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { questions: "" };
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <TextInput
            style={styles.pollsQuestionStyle}
            placeholder="Your question... "
            onChangeText={value => this.setState({ questions: value })}
            value={this.state.questions}
          />
          <View style={{ flexDirection: "row" }}>
            <View style={styles.squareBody}>
              <Image
                style={styles.image}
                source={require("./../../assets/camera.png")}
              />
            </View>
            <View style={styles.squareBody}>
              <Image
                style={styles.image}
                source={require("./../../assets/camera.png")}
              />
            </View>
          </View>
        </View>
        <Button full style={styles.buttonDone}>
          <Text style={{ fontSize: 30, color: "#69a5e396" }}>Primary</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  squareBody: {
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: 400,
    backgroundColor: "#ddd"
  },
  pollsQuestionStyle: {
    fontSize: 30,
    color: "#262626",
    paddingTop: 50,
    paddingBottom: 50,
    marginStart: 20,
    marginEnd: 20
  },
  image: {
    width: 80,
    height: 80
  },
  buttonDone: {
    padding: 5,
    backgroundColor: "#66B2FF"
  }
});

export default connect()(AddPollsScreen);
