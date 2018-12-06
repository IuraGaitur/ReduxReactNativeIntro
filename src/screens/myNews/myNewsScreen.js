import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getAllNews, addMoreNews } from './myNewsAction';
import MyNewsItem from './components/myNewsItem';
import {Actions} from "react-native-router-flux";
import NFLitem from "../nflNews/components/nflItem";

class MyNewsScreen extends Component {

  async componentDidMount() {
    this.props.getNews();
  }

  loadMore = () => {
    this.props.addMoreNews();
  };

  showCategoryItems = () => {
      Actions.newsCategory();
  };

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.container}>
          <FlatList
            keyExtractor={(item, index) => { return index.toString() }}
            data={this.props.news}
            renderItem={({ item }) => <MyNewsItem item={item} onPress={() => this.showCategoryItems(item)}/>}
            onEndReached={() => this.loadMore()}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingTop: 10
  }
})

const mapStateToProps = state => {
  return {
    news: state.myNews.news
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNews: () => { dispatch(getAllNews()) },
    addMoreNews: () => { dispatch(addMoreNews()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyNewsScreen)