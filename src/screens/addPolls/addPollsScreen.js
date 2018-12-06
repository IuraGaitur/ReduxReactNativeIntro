import React, { Component } from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";
import { Container, Button, Text, Content, Root } from "native-base";
import { connect } from "react-redux";
import BottomDialog from "./components/BottomDialog";

class AddPollsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { questions: "" };
  }

  onPressButtonDone = () => {};

  render() {
    return (
      <Root>
        <Container>
          <Content>
            <View style={styles.container}>
              <TextInput
                style={styles.pollsQuestionStyle}
                placeholder="Ask a question"
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
            <Button
              full
              style={styles.buttonDone}
              onPress={this.onPressButtonDone}
            >
              <Text style={styles.buttonText}>DONE</Text>
            </Button>
            <BottomDialog />
          </Content>
        </Container>
      </Root>
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
    marginEnd: 20,
    textAlign: "center",
    fontFamily: "notoserif"
  },
  image: {
    width: 80,
    height: 80
  },
  buttonDone: {
    height: 60,
    backgroundColor: "#66B2FF",
    marginTop: 50
  },
  buttonText: {
    fontSize: 30,
    color: "#b9d5f3",
    fontWeight: "bold",
    fontFamily: "notoserif"
  }
});

export default connect()(AddPollsScreen);
