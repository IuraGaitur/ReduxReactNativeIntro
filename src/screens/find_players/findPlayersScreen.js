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
import { connect } from "react-redux";
import FindPlayersListItem from "../../components/FindPlayersListItem";
import { getAllPlayers } from "./findPlayersAction";
import HeaderMenu from "../../components/HeaderMenu";

class FindPlayersScreen extends Component {
  constructor() {
    super();
    this.state = {
      renderedListData: [],
      headerHeight: 88
    };
  }

  async componentDidMount() {
    this.props.getPlayers();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.players != this.state.renderedListData) {
      this.setState({ renderedListData: newProps.players });
    }
  }

  _onChangeSearchText = searchText => {
    let filteredList = {};
    let text = searchText.toLowerCase();

    if (searchText.length >= 2) {
      let playersList = this.props.players;
      filteredList = playersList.filter(item => {
        if (item.player.toLowerCase().match(text)) {
          return item;
        }
      });
    }
    if (!text || text === "") {
      this.setState({
        renderedListData: this.props.players,
        noData: false
      });
    } else if (!filteredList.length && searchText.length > 2) {
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

  measureToolbar = (e) => {
      this.setState({ headerHeight: e.nativeEvent.layout.height })
  }

  render() {
    return (
      <Container>
          <HeaderMenu title="Settings" right={<View/>} actionOnMeasure={this.measureToolbar}/>
        <View style={{backgroundColor:"#ddd", padding: 8}}>
          <View
            style={{ backgroundColor: "white", marginHorizontal: 14, marginVertical: 8, borderRadius: 8, paddingHorizontal: 8  }}
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
          </View>
        </View>
        <View>
          {!this.state.noData && (
            <FlatList
              data={this.state.renderedListData}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => this._onItemPress(item.player)}
                >
                  <FindPlayersListItem item={item} />
                </TouchableOpacity>
              )}
            />
          )}
          {this.state.noData && (
            <View style={{ alignItems: "center", marginTop: 20 }}>
              <Text style={{fontSize:20}}>Not Found</Text>
            </View>
          )}
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.findPlayers.players
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPlayers: () => {
      dispatch(getAllPlayers());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FindPlayersScreen);
