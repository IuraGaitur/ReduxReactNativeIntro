import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, View, Text } from 'native-base';
import { ToastAndroid, TouchableHighlight, StyleSheet } from "react-native";
import MainScreenToolbar from "./../../components/MainScreenToolbar";
import BottomNavigationBar from "./../../components/BottomNavigationBar";
import NFLScreen from '../nflNews/nflScreen';
import MLBScreen from '../mlbNews/mlbScreen';
import PollsMainScreen from './../polls/pollsMainScreen';
import MyNewsScreen from '../myNews/myNewsScreen';

class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { headerHeight: 88, showTitle: true, title: "NFL News" }
        this.props.navigation.state.key = 'mainScreen';
    }

    componentDidMount() { }

    measureToolbar = (e) => {
        this.setState({ headerHeight: e.nativeEvent.layout.height })
    };

    changeActiveTab = (position) => {
        switch (position) {
            case 0:
                this.setState({ showTitle: true, title: "NFL News" })
                break;
            case 1:
                this.setState({ showTitle: true, title: "MLB News" })
                break;
            case 2:
                this.setState({ showTitle: false })
                break;
            default:
                this.setState({ showTitle: true, title: "News" })
                break;
        }
    }

    render() {
        return (
            <Container>
                <View style={{ height: '100%', position: 'absolute', zIndex: -1, paddingTop: this.state.headerHeight }}>
                    <BottomNavigationBar
                        changeActiveTab={(pos) => this.changeActiveTab(pos)}
                        nflPage={<NFLScreen />}
                        mblPage={<MLBScreen />}
                        myNewsPage={<MyNewsScreen />}
                        pollsPage={<View>
                            <View />
                        </View>}
                    />
                </View>
                <View style={{ flex: 0 }} >
                    <MainScreenToolbar showTitle={this.state.showTitle}
                        title={this.state.title}
                        actionOnMeasure={this.measureToolbar}/>
                </View>
            </Container>);
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);