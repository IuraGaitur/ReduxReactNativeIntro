import React, { Component } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import {
  Container,
  Header,
  InputGroup,
  Item,
  Input,
  Icon,
  Button,
  Body
} from "native-base";
import FindPlayersListItem from "../../components/FindPlayersListItem";

export default class FindPlayersScreen extends Component {
  constructor() {
    super();
    this.state = {
      playersList: []
    };
  }

  componentDidMount() {
    data = [
      {
        logo: {
          uri:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Y-fCVDkx7gkRD3NPPkdVgHd3elPFt2CZWFXHcHNQdiK59-FAdQ"
        },
        player: "Devin",
        playerPosition: "SS",
        isFavorite: true
      },
      {
        logo: {
          uri:
            "https://i.pinimg.com/236x/44/5a/c3/445ac389828217249120369782413174--rugby-logos-sport-logos.jpg"
        },
        player: "Jackson",
        playerPosition: "QB",
        isFavorite: false
      },
      {
        logo: {
          uri:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2v73Pn2Lmh4RdxEiu1jrM6xD3A6CKqGiW7Aw-b3biC_aI1wQw"
        },
        player: "James",
        playerPosition: "CB",
        isFavorite: true
      },
      {
        logo: {
          uri:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Y-fCVDkx7gkRD3NPPkdVgHd3elPFt2CZWFXHcHNQdiK59-FAdQ"
        },
        player: "Johel",
        playerPosition: "LB",
        isFavorite: false
      },
      {
        logo: {
          uri:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDYb6ACs84ZnyA2yV2g4lrbxHULyl6x65r09g4317pllFtP7o"
        },
        player: "John",
        playerPosition: "LB",
        isFavorite: true
      }
    ];
    this.setState({
      playersList: data,
      renderedListData: data
    });
  }

  _onChangeSearchText = searchText => {
    let filteredList = {};
    let text = searchText.toLowerCase();

    if (searchText.length >= 2) {
      let playersList = this.state.playersList;
      filteredList = playersList.filter(item => {
        if (item.player.toLowerCase().match(text)) {
          return item;
        }
      });
    }
    if (!text || text === "") {
      this.setState({
        renderedListData: this.state.playersList,
        noData: false
      });
    } else if (!filteredList.length) {
      this.setState({
        noData: true
      });
    } else if (Array.isArray(filteredList)) {
      this.setState({
        noData: false,
        renderedListData: filteredList
      });
    }
  };

  _onItemPress = item => {
    ToastAndroid.show(item, ToastAndroid.SHORT);
  };

  render() {
    return (
      <Container>
        <Header
          style={{ backgroundColor: "#ddd" }}
          searchBar
          rounded
          autoCorrect={false}
        >
          <Item style={{ borderRadius: 6 }}>
            <Icon name="ios-search" />
            <Input
              onChangeText={text => this._onChangeSearchText(text)}
              placeholder="Search"
            />
          </Item>
        </Header>
        <View style={styles.mainContainer}>
          <FlatList
            data={this.state.renderedListData}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => this._onItemPress(item.player)}>
                <FindPlayersListItem item={item} />
              </TouchableOpacity>
            )}
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {}
});
