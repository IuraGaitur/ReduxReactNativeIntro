import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from "native-base";

export default class TabBarItem extends Component {

    getTabForPosition(position, isActive) {
        switch (this.props.index) {
            case 0: return (<Icon name="american-football" style={styles.image} />)
            case 1: return (<Icon name="baseball" style={[styles.image]} />)
            case 2: return (<Icon name="star" style={[styles.image]} />)
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
        width: 24,
        height: 24,
        color: "white",
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