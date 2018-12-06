import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class MyNewsItem extends Component {

    render() {
        return (
            <View>
                <TouchableHighlight onPress={this.props.onPress}>
                    <View style={styles.columnView}>
                        <View style={styles.mainView}>
                            <Image
                                style={styles.image}
                                source={this.props.item.logo}
                            />
                            <View style={styles.rightView}>
                                <View style={styles.titleView}>
                                    <Text style={styles.titleBlack}>{this.props.item.title}</Text>
                                    <Text style={styles.titleBlue}>{this.props.item.subtitle}</Text>
                                    <Image source={require('../../../assets/my_news_star.png')} style={styles.startStyle} />
                                </View>
                                <View style={styles.descriptionView}>
                                    <Text style={styles.descriptionText}>{this.props.item.description}</Text>
                                    <Text style={styles.dateText}>{this.props.item.date}</Text>
                                </View>
                            </View>

                        </View>
                        <View style={styles.bottomBorder} />
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    columnView: {
        flex: 1,
        flexDirection: 'column'
    },
    mainView: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: 20,
        flex: 1,
        paddingVertical: 16,
        width: "100%"

    },
    bottomBorder: {
        backgroundColor: '#ccc',
        height: 1,
        marginTop: 14,
        flex: 1,
        bottom: 0,
        marginHorizontal: 20

    },
    image: {
        width: '30%',
        height: 70,
        marginRight: 10,
        resizeMode: 'contain',
        flex: 1
    },
    rightView: {
        flexDirection: 'column',
        width: '80%'
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
    },
    startStyle: {
        width: 20,
        height: 20,
        marginStart: 8,
        marginBottom: 4
    }
})