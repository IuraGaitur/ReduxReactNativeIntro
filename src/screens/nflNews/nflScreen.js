
import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import NFLitem from './components/nflItem';
import { connect } from "react-redux";
import { getAllNews } from "./nflAction";

class NFLScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { news: [] }
    }

    async componentDidMount() {
        this.props.getNews();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.news != this.state.news) {
            this.setState({ news: newProps.news });
        }
    }

    render() {
        return (
            <View style = { styles.mainView }>
                <View style = { styles.container }> 
                    <FlatList 
                        keyExtractor = { (item, index) => { return index.toString() }}
                        data = { this.state.news }
                        renderItem = { ({ item }) => <NFLitem item = { item }/> }
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
        news: state.nflNews.news
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNews: () => {
            dispatch(getAllNews());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NFLScreen)