import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, StatusBar, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux'

class LandingScreen extends Component {

    // static navigationOptions = {
    //     header: null
    // };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent={true} backgroundColor={'transparent'} />
                <Image source={require('../../assets/rugby.jpg')} style={styles.backgroundImage} />
                <View style={styles.backgroundCover} />
                <View style={styles.loginForm}>
                    <View style={{ alignItems: 'center', }}>
                        <Text style={styles.titleStyle}>ROTOLEGENDS</Text>
                        <Text style={styles.subTitleStyle}>FANTASY NEWS</Text>
                    </View>
                    <View style={styles.bottomViewStyle}>
                        <Text style={styles.loginWithStyle}>Login with</Text>
                        <View style={styles.buttonContainerStyle}>
                            <TouchableHighlight onPress={this._onPressFacebookButton} style={styles.circleContainer} >
                                <Image
                                    style={styles.imageStyle}
                                    source={require('../../assets/facebook.png')}
                                />
                            </TouchableHighlight>
                            <TouchableHighlight onPress={this._onPressLoginButton} style={styles.circleContainer} >
                                <Image
                                    style={styles.imageStyle}
                                    source={require('../../assets/email.png')}
                                />
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    _onPressFacebookButton() {
        // TODO, implement login with Facebook account
    }

    _onPressLoginButton() {
        // TODO, show login screen
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    backgroundCover: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        position: 'absolute'
    },
    loginForm: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: 0
    },
    titleStyle: {
        fontSize: 45,
        fontWeight: 'bold',
        color: 'white',

    },
    subTitleStyle: {
        fontSize: 15,
        color: 'white'
    },
    loginWithStyle: {
        fontSize: 26,
        color: 'white',
        fontWeight: 'bold',
        alignItems: 'center',
        flex: 1,
        alignSelf: 'center'
    },
    imageStyle: {
        backgroundColor: 'transparent',
        height: 40,
        width: 40,
        borderRadius: 3,
    },
    circleContainer: {
        width: 90,
        height: 90,
        borderRadius: 90 / 2,
        backgroundColor: 'transparent',
        borderColor: 'white',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 25,
    },
    bottomViewStyle: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    buttonContainerStyle: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export default connect()(LandingScreen);