import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import NewsApi from '../../data/api/newsApi';

export default class NewsCategoryScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { news: [] }
  }

  async componentDidMount() {
    let articles = await new NewsApi().instance().getNews();
    this.setState({ news: articles });
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          marginTop: 10,
          backgroundColor: "#A3A3A3",
        }}
      />
    );
  };

  _actionFavorite() {
    // TODO, add news category to favorites
  }

  _actionNesDetails() {
    // TODO, add news details screen
  }

  renderHeader = () => {
    return (
      <View style={{ flex: 1, flexDirection: 'row', marginTop: 25, alignItems: 'center', justifyContent: 'space-between' }}>
        <Image source={require('../../assets/rugby.jpg')} style={styles.newsCategoryLogo} />
        <Text style={styles.newsCategoryTitle}>DeMarco Murray RB</Text>
        <TouchableOpacity onPress={this._actionFavorite}>
          <Image source={require('../../assets/news_star_icon.png')} style={styles.newsFavoriteIcon} />
        </TouchableOpacity>
      </View>);
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.news}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
            <TouchableWithoutFeedback onPress={this._actionNesDetails}>
              <View style={styles.secondContainer}>
                <Text style={styles.newsTitle}>{item.newsTitle}</Text>
                <Text style={styles.newsSubTitle}>{item.newsDate}</Text>
              </View>
            </TouchableWithoutFeedback>

          }
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingStart: 25,
    paddingEnd: 25,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  secondContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 18,
    marginBottom: 15,
  },
  newsTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: '400',
  },
  newsSubTitle: {
    fontSize: 14,
    color: 'gray',
    marginTop: 3,
    fontWeight: '400'
  },
  newsCategoryLogo: {
    width: 80,
    height: 80
  },
  newsCategoryTitle: {
    fontSize: 24,
    fontWeight: '400',
    color: '#3D3D3D'
  },
  newsFavoriteIcon: {
    height: 25,
    width: 25
  }

})

