import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { Header, Title, Button, Left, Right, Body, Icon, View, List, ListItem } from "native-base";
import Collapsible from "react-native-collapsible";
import { ActionConst, Actions } from "react-native-router-flux";

export default class HeaderMenu extends Component {

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

    gotoMainScreen = () => {
        this.openMenu();
        Actions.main({type: ActionConst.RESET});
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
                        <Title style={styles.title}>{this.props.title}</Title>
                    </Body>
                    <Right>
                        {this.props.right}
                    </Right>
                </Header >
                <Collapsible collapsed={menuIsVisible} duration={300}>
                    <View style={{ backgroundColor: "#66B2FF", width: '100%', position: 'relative', zIndex: 999 }}>
                        <List itemDivider={false} >
                            <ListItem noBorder button onPress={() => { this.gotoMainScreen() }}>
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
    title: {
        fontSize: 20,
        color: "white",
        fontWeight: '400',
        textAlign: 'center'
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
