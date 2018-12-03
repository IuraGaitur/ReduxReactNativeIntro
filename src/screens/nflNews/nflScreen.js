
import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import NFLitem from './components/nflItem';

export default class nflScreen extends Component {

    currentPage = 0;
    pageSize = 20;

    constructor() {
        super(props);
        this.state = { news: ['test', 'test', 'test', 'test'], isRefreshing: false };
    }

    showActivityIndicator = () => {
        return ( <ActivityIndicator size = 'large' color = 'gray' />)
    }

    render() {
        return (
            <View style = { styles.mainView }>
                <View style = { styles.container }> 
                    <FlatList 
                        keyExtractor = { (item, index) => { return index.toString() }}
                        // ListFooterComponent = { this.showActivityIndicator() }
                        // onRefresh = { this.actionRefresh }
                        // refreshing = { this.state.isRefreshing }
                        // onEndReachedThreshold = { 1 }
                        // onEndReached = { ({ distanceFromEnd }) => {
                        //     this.loadMoreData(this.page, this.pageSize)
                        // }}
                        data = { this.state.news }
                        renderItem = { ({ item }) => <NFLitem /> }
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
        paddingTop: 20
    }
})