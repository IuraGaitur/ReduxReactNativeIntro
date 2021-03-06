import React, { Component } from "react";
import { ToastAndroid, Text, TouchableHighlight, StyleSheet, Animated } from "react-native";
import { Header, Title, Button, Left, Right, Body, Icon, View, List, ListItem } from "native-base";
import SegmentedControlTab from 'react-native-segmented-control-tab';
import Collapsible from "react-native-collapsible";
import {ActionConst, Actions} from "react-native-router-flux";

export default class MainScreenToolbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pressStatus: false,
            selectedIndex: 0,
            menuIsVisible: true
        };
    }

    indexChange = (index) => {
        this.setState({
            ...this.state,
            selectedIndex: index
        })
    }

    openMenu = () => {
        this.setState({ menuIsVisible: !this.state.menuIsVisible });
    };

    _actionMyPolls = () => {
        this.openMenu();
        Actions.polls();
    };

    goToFindPlayers = () => {
        this.openMenu();
        Actions.findPlayers();
    };

    goToSettingsPage = () => {
        this.openMenu();
        Actions.settings();
    };

    gotoNewsList = () => {
        this.hideNavBar();
        Actions.main({type: ActionConst.RESET})
    };

    hideNavBar = () => {
        this.openMenu();
    };

    render() {
        const { menuIsVisible } = this.state;
        return (
            <View>
                <Header
                    androidStatusBarColor="#66B2FF"
                    style={{ backgroundColor: "#66B2FF", color: '#66B2FF' }}
                    onLayout={(e) => this.props.actionOnMeasure(e)}>
                    <Left>
                        <Button transparent
                            onPress={() => this.openMenu()}>
                            <Icon style={{ color: "white" }} name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <View style={styles.middleView}>
                            {this.props.showTitle && <Title style={{color: 'white'}}>{this.props.title}</Title>}
                            {!this.props.showTitle && <SegmentedControlTab
                                tabStyle={styles.defaultTab}
                                tabTextStyle={styles.defaultTabText}
                                activeTabStyle={styles.activeTab}
                                values={['NFL', 'MLB']}
                                selectedIndex={this.state.selectedIndex}
                                onTabPress={this.indexChange}
                            />}
                        </View>
                    </Body>
                    <Right>
                        {this.props.rightActions != null ? this.props.rightActions: <View/>}
                    </Right>
                </Header >
                <Collapsible collapsed={menuIsVisible} duration={300}>
                    <View style={{ backgroundColor: "#66B2FF", width: '100%', position: 'relative', zIndex: 999 }}>
                        <List itemDivider={false} >
                            <ListItem noBorder button onPress={() => { this.gotoNewsList()}}>
                                <Text style={styles.menuItem}>News</Text>
                            </ListItem>
                            <ListItem noBorder button onPress={() => { this._actionMyPolls() }}>
                                <Text style={styles.menuItem}>My polls</Text>
                            </ListItem>
                            <ListItem noBorder
                                button onPress={() => { this.goToFindPlayers() }}
                            >
                                <Text style={styles.menuItem}>Find Players</Text>
                            </ListItem>
                            <ListItem noBorder button onPress={() => { this.goToSettingsPage() }}>
                                <Text style={styles.menuItem}>Settings</Text>
                            </ListItem>
                        </List>
                    </View>
                </Collapsible>

            </View>
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
        width: 240
    },
    defaultTab: {
        backgroundColor: 'transparent'
    },
    defaultTabText: {
        color: 'white'
    },
    activeTab: {
        backgroundColor: '#3787D9'
    },
    menuItem: {
        flex: 1,
        textAlign: 'center',
        color: 'white',
        fontSize: 24
    }
});
