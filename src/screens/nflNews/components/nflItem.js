
import React, { Componenet } from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class NFLitem extends Componenet {

    render() {

        let picture = { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }

        return (
            <View styles = { styles.mainView }>
                <Image 
                    style = { styles.image }
                    source = { picture }
                />
                <View style = { styles.rightView }>
                    <View style = { styles.titleView }>
                        <Text style = { styles.titleBlack }> </Text>
                        <Text style = { styles.titleBlue }></Text>
                    </View>
                    <View style = { styles.descriptionView }>
                        <Text style = { styles.dateText }></Text>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    mainView: {
        width: '100%',
        heigh: 250
    },
    image: {
        width: '30%',
        heigh: '30%'
    },
    rightView: {

    },
    titleView: {

    },
    titleBlack: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    titleBlue: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'blue'
    },
    descriptionView: {

    },
    descriptionText: {
        fontSize: 15,
    },
    dateText: {
        fontSize: 13,
        color: 'gray'
    }
})