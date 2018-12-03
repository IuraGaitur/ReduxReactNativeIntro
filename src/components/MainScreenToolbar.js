import React, { Component } from "react";
import { ToastAndroid, Text, TouchableHighlight, StyleSheet, Animated } from "react-native";
import { Header, Title, Button, Left, Right, Body, Icon, View, List, ListItem } from "native-base";
import SegmentedControlTab from 'react-native-segmented-control-tab';

export default class MainScreenToolbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pressStatus: false,
            selectedIndex: 0,
            animation   : new Animated.Value(0),
            maxHeight: 200,
            minHeight: 0,
            menuIsVisible: false
        };
    }

    _actionSearch() {
        ToastAndroid.show("Search button clicked!", ToastAndroid.SHORT);
    }

    indexChange = (index) => {
        console.log(index);
        this.setState({
            ...this.state,
            selectedIndex: index
        })
    }

    toggle(){
        //Step 1
        let initialValue    = this.state.menuIsVisible? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue      = this.state.menuIsVisible? this.state.minHeight : this.state.maxHeight + this.state.minHeight;
        console.log(this.state.menuIsVisible, initialValue, finalValue);
        this.setState({menuIsVisible: !this.state.menuIsVisible});
        this.state.animation.setValue(initialValue);
        Animated.spring(this.state.animation,{toValue: finalValue}).start();
    }

    _setMaxHeight(event) {
        //console.log(event.nativeEvent.layout.height, "max")
        this.setState({
            maxHeight  : event.nativeEvent.layout.height
        });
    }
    
    _setMinHeight(event){
        //console.log(event.nativeEvent.layout.height, "min")
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }


    openMenu = () => {
        this.toggle()
    }

    render() {
        const {menuIsVisible} = this.props;
        return (
            <View>
                <Header
                    androidStatusBarColor="#66B2FF"
                    style={{ backgroundColor: "#66B2FF", color: '#66B2FF' }}>
                    <Left>
                        <Button transparent
                            onPress={() => this.openMenu()}>
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
                <Animated.View style={{overflow:'hidden', position: 'absolute', marginTop: 56, zIndex: 9999, width: '100%', height: this.state.animation, backgroundColor: '#3787D9'}}>
                    <View style={{flexDirection: 'row', height: 200, width: '100%'}} onLayout={this._setMaxHeight.bind(this)}>
                        <List >
                            <ListItem>
                                <Text>News</Text>
                            </ListItem>
                            <ListItem>
                                <Text>My News</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Players</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Settings</Text>
                            </ListItem>
                        </List>
                    </View>
                </Animated.View>
                
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
    }
});
