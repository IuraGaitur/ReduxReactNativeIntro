import React, { Component } from "react";
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import {
  Container,
  Content,
  Input,
} from "native-base";
import WebSearchItem from "./components/webSearchItem";
import { connect } from "react-redux";
import { getAllWebContent } from "./webSearchAction";
import WebSearchToolbar from "../../components/WebSearchToolbar";

class WebSearchScreen extends Component {

  constructor() {
    super();
    this.state = {
      renderedListData: [],
    };
  }

  async componentDidMount() {
    this.props.getWebContent();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.webContent != this.state.renderedListData) {
      this.setState({ renderedListData: newProps.webContent });
    }
  }

  _onChangeSearchText = (searchText) => {
    let filteredList = {};
    let text = searchText.toLowerCase();

    if (searchText.length >= 2) {
      let webContentsList = this.props.webContent;
      filteredList = webContentsList.filter(item => {
        if (item.webItem.toLowerCase().match(text)) {
          return item;
        }
      });
    }

    if (!text || text === "") {
      this.setState({
        renderedListData: this.props.webContent,
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

  render() {
    return (
      <Container style={{ backgroundColor: '#ededed' }}>
        <WebSearchToolbar
          navigation={this.props.navigation} />
        <Content>
          <View style={{ backgroundColor: 'white', height: 100, alignItems: 'center' }} searchBar
            autoCorrect={false}>
            <Input
              onChangeText={text => this._onChangeSearchText(text)}
              placeholder="Search anything..."
              style={{ fontSize: 22, color: '#505050', fontWeight: '500' }}
            />
          </View>
          <View >
            {!this.state.noData && (
              <FlatList
                numColumns={3}
                data={this.state.renderedListData}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => this._onItemPress(item.webItem)}
                  >
                    <WebSearchItem item={item} />
                  </TouchableOpacity>
                )}
              //keyExtractor={item => item.key}
              />
            )}
            {this.state.noData && (
              <View style={{ alignItems: "center", marginTop: 20 }}>
                <Text style={{ fontSize: 20 }}>Not Found</Text>
              </View>
            )}
          </View>
        </Content>
      </Container>);
  }
}

const mapStateToProps = state => {
  return {
    webContent: state.findWebContent.webContent
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getWebContent: () => {
      dispatch(getAllWebContent());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WebSearchScreen);
