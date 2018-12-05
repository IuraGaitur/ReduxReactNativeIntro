import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import NFLitem from './components/nflItem';
import { connect } from "react-redux";
import { getAllNews, addMoreNews } from "./nflAction";
import {Actions} from 'react-native-router-flux';

class NFLScreen extends Component {

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
            <View style = { styles.mainView }>
                <View style = { styles.container }> 
                    <FlatList 
                        keyExtractor = { (item, index) => { return index.toString() }}
                        data = { this.props.news }
                        renderItem = { ({ item }) => <NFLitem item = { item } onPress={() => this.showCategoryItems(item)}/> }
                        onEndReached={ () => this.loadMore()}
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

const mapStateToProps = (state) => {
    return {
        news: state.nflNews.news
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNews: () => { dispatch(getAllNews()) },
        addMoreNews: () => { dispatch(addMoreNews()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NFLScreen)