import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class CommentItem extends Component {
    constructor (props) {
        super(props);
        
    }

    render () {
        console.log(this.props.image);
        return (
            <View style={styles.secondContainer}>
                <View style={styles.topView}>
                    <View style={styles.userProfileContainer}>
                        <Image source={{uri: "https://i.pinimg.com/236x/44/5a/c3/445ac389828217249120369782413174--rugby-logos-sport-logos.jpg"}}
                                style={styles.userProfileImg}/>
                        <Text style={styles.name}> {this.props.name} </Text>
                    </View>
                    <Text style={styles.date}> {this.props.date} </Text>
                </View>
                <Text style={styles.comment}> {this.props.comment} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    userProfileContainer: {
        flexDirection: 'row',
    },
    secondContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 18,
        paddingStart: 15,
        paddingEnd: 15,
        marginBottom: 10,
        backgroundColor: "white",
    },
    userProfileImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    name: {
        textAlign: "left",
        fontSize: 20,
        width: "65%",
        paddingTop: 5,
        fontWeight: "normal",
        height: "100%",
        color: "black"
    },
    date: {
        textAlign: "right",
        fontSize: 15,
        paddingTop: 7,
        fontWeight: "normal",
        color: "grey"
    },
    comment: {
        textAlign: "left",
        fontSize: 15,
        fontWeight: "normal",
        color: "grey"
    },
    image: {
        width: 50,
        height: 50,
        margin: 10,
    }
})