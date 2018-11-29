import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from "native-base";

export default class TabBarItem extends Component {

    getTabForPosition(position, isActive) {
        switch (this.props.index) {
            case 0: return (<Icon name="football" style={styles.image} />)
            case 1: return (<Icon name="baseball" style={[styles.image]} />)
            case 2: return (<Icon name="list" style={[styles.image]} />)
            default: return (<Icon name="add" style={[styles.image]} />)
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
        backgroundColor: '#66B2FF'
    },
    image: {
        width: 30,
        height: 30,
        color: "white",
    },
    title: {
        fontSize: 15,
        color: "white",
    },
    active: {
        backgroundColor: '#3D6A99',
    },
    inactive: {
        backgroundColor: '#66B2FF',
    }
})