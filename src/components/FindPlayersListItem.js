import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { ListItem, CheckBox, Text, Icon, Body } from "native-base";

export default class FindPlayersListItem extends Component {
  state = {
    isFavorite: this.props.item.isFavorite
  };

  onStarPress = () => {
    this.setState({ isFavorite: !this.state.isFavorite });
  };

  render() {
    return (
      <ListItem>
        <Body style={styles.bodyItem}>
          <Image source={this.props.item.logo} style={styles.imageLogo} />
          <View style={styles.textBody}>
            <Text style={styles.playerName}>{this.props.item.player} </Text>
            <Text style={styles.playerPosition}>
              {this.props.item.playerPosition}{" "}
            </Text>
          </View>
          <TouchableOpacity onPress={() => this.onStarPress()}>
            <Image
              style={styles.starIcon}
              source={
                !this.state.isFavorite
                  ? require("./../assets/gray_star.png")
                  : require("./../assets/blue_star.png")
              }
            />
          </TouchableOpacity>
        </Body>
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  bodyItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  imageLogo: {
    width: 50,
    height: 50,
    marginStart: 10
  },
  starIcon: {
    width: 30,
    height: 30
  },
  textBody: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginStart: 20
  },
  playerName: {
    fontSize: 22,
    color: "#4f4f4f"
  },
  playerPosition: {
    fontSize: 16,
    color: "#66B2FF"
  }
});
