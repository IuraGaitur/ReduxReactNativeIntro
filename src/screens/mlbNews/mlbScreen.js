
import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import NFLitem from '../nflNews/components/nflItem';
import { connect } from 'react-redux';
import { getAllNews, addMoreNews } from './mlbAction';

class MLBScreen extends Component {

    async componentDidMount() {
        this.props.getNews();
    }

    loadMore = () => {
        this.props.addMoreNews();
    }

    render() {
        return (
            <View style = { styles.mainView }>
                <View style = { styles.container }> 
                    <FlatList 
                        keyExtractor = { (item, index) => { return index.toString() }}
                        data = { this.props.news }
                        renderItem = { ({ item }) => <NFLitem item = { item }/> }
                        onEndReached = { () => this.loadMore() }
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
        news: state.mlbNews.news
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNews: () => { dispatch(getAllNews()) },
        addMoreNews: () => { dispatch(addMoreNews()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MLBScreen)