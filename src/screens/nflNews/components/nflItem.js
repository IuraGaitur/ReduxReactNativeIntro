
import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class NFLitem extends Component {

    render() {

        let picture = { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }

        return (
            <View style = { styles.mainView }>
                <Image 
                    style = { styles.image }
                    source = { picture }
                />
                <View style = { styles.rightView }>
                    <View style = { styles.titleView }>
                        <Text style = { styles.titleBlack }>Geno Smith</Text>
                        <Text style = { styles.titleBlue }>GB</Text>
                    </View>
                    <View style = { styles.descriptionView }>
                        <Text style = { styles.descriptionText }>adasdasdasd adsasd asd asd asd asd asdasdasda asd asd as d</Text>
                        <Text style = { styles.dateText }>12:30 45/01/2018</Text>
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
        height: '80%',
        marginRight: 10,
        marginTop: 'auto',
        marginBottom: 'auto',
        resizeMode: 'stretch'
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
        marginTop: 10
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