import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon } from "native-base";

export default class PollsTabBarItem extends Component {

    getTabForPosition(position, isActive) {
        switch (this.props.index) {
            case 0: return (<Image source={require('../assets/my_polls_star.png')} style={styles.image} />)
            case 1: return (<Image source={require('../assets/favorite_polls.png')} style={[styles.image]} />)
            default: return (<Icon name="chatbubbles" style={[styles.image]} />)
        }
    }

    render() {
        const { isActive } = this.props;
        return (
            <View style={[styles.mainView, isActive ? styles.active : styles.inactive]}>
                {this.getTabForPosition(this.props.index, isActive)}
                <Text style={[styles.title]}> {this.props.title} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#66B2FF',
        padding: 8
    },
    image: {
        width: 20,
        height: 20,
        marginTop: 10,
    },
    title: {
        fontSize: 15,
        color: "white",
        paddingTop: 5
    },
    active: {
        backgroundColor: '#3D6A99',
    },
    inactive: {
        backgroundColor: '#66B2FF',
    }
})