
import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class NFLitem extends Component {

    render() {
        return (
            <View style = { styles.mainView }>
                <Image 
                    style = { styles.image }
                    source = { this.props.item.logo }
                />
                <View style = { styles.rightView }>
                    <View style = { styles.titleView }>
                        <Text style = { styles.titleBlack }>{ this.props.item.title }</Text>
                        <Text style = { styles.titleBlue }>{ this.props.item.subtitle }</Text>
                    </View>
                    <View style = { styles.descriptionView }>
                        <Text style = { styles.descriptionText }>{ this.props.item.description }</Text>
                        <Text style = { styles.dateText }>{ this.props.item.date }</Text>
                    </View>
                </View>
                <View style = { styles.bottomBorder } ></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        height: 150,
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'center',

    },
    bottomBorder: {
        backgroundColor: 'gray',
        height: 1,
        width: '100%',
        position: 'absolute',
        bottom: 0
    },
    image: {
        width: '30%',
        height: '50%',
        marginRight: 10,
        marginTop: 'auto',
        marginBottom: 'auto',
        resizeMode: 'contain'
    },
    rightView: {
        width: '65%',
        height: '80%',
        marginTop: 'auto',
        marginBottom: 'auto',
        flexDirection: 'column'
    },
    titleView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleBlack: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    titleBlue: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#66B2FF',
        marginLeft: 5
    },
    descriptionView: {
        flexDirection: 'column',
        marginTop: 6
    },
    descriptionText: {
        fontSize: 15,
    },
    dateText: {
        fontSize: 13,
        marginTop: 3,
        color: 'gray'
    }
})