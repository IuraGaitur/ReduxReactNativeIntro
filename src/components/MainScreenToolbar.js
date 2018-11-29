import React, { Component } from "react";
import { ToastAndroid, Text, TouchableHighlight, StyleSheet } from "react-native";
import { Header, Title, Button, Left, Right, Body, Icon, View } from "native-base";
import SegmentedControlTab from 'react-native-segmented-control-tab';

export default class MainScreenToolbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pressStatus: false,
            selectedIndex: 0
        };
    }

    _actionSearch() {
        ToastAndroid.show("Search button clicked!", ToastAndroid.SHORT);
    }

    indexChange = (index) => {
        this.setState({
            ...this.state,
            selectedIndex: index
        })
    }

    render() {
        return (
            <Header
                androidStatusBarColor="#66B2FF"
                style={{ backgroundColor: "#66B2FF", color: '#66B2FF' }}>
                <Left>
                    <Button transparent >
                        <Icon style={{ color: "white" }} name="menu" />
                    </Button>
                </Left>
                <Body>
                    <View style={styles.middleView}>
                        <SegmentedControlTab
                            tabStyle={styles.defaultTab}
                            tabTextStyle={styles.defaultTabText}
                            activeTabStyle={styles.activeTab}
                            values={['NFL', 'MLB']}
                            selectedIndex={this.state.selectedIndex}
                            onTabPress={this.indexChange}
                        />
                    </View>
                </Body>
                <Right>
                    <Button transparent onPress={this._actionSearch}>
                        <Icon style={{ color: "white" }} name="search" />
                    </Button>
                </Right>
            </Header >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    middleView: {
        justifyContent: "center",
        alignItems: "center",
        height: 80,
        width: 270
    },
    defaultTab: {
        backgroundColor: 'transparent'
    },
    defaultTabText: {
        color: 'white'
    },
    activeTab: {
        backgroundColor: '#3787D9'
    }
});
