import React, { Component } from 'react';
import { Text, View, TextInput, Button, ActivityIndicator, StyleSheet, Image, Dimensions } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { connect } from 'react-redux'
import { loginRequest } from './authenticationAction';

class LoginScreen extends Component {

    title = 'ROTOLEGENDS';
    subtitle = 'FANTASY NEWS'

    constructor(props) {
        super(props);
        this.state = { 
            email: null,
            pass: null,
            selectedIndex: 0
        };
    }

    login = () => {
        const email = this.state.email;
        const pass = this.state.pass;
        this.props.onLogin(email, pass);
    };

    indexChange = (index) => {
        this.setState({
            ...this.state,
            selectedIndex: index
        })
    }

    render() {
        return (
            <View style = { styles.defaultView }>
                < Image style={ styles.backgroundImage } source = { require('./../../../app_image/rugby.jpg') }/>
                <View style={styles.backgroundCover}/>
                <View style = { styles.mainView }>
                    <View style = { styles.topView }>
                        <Text style = { styles.logoTitle }>{ this.title }</Text>
                        <Text style = { styles.logoSubtitle }>{ this.subtitle }</Text>
                    </View>
                    <View style = { styles.mailView }>
                        <Image style = { styles.mailImage } source = { require('./../../../app_image/mail.png') }/>
                    </View>
                    <View style = { styles.middleView }>
                        <SegmentedControlTab
                            tabStyle = { styles.defaultTab }
                            tabTextStyle = { styles.defaultTabText }
                            activeTabStyle = { styles.activeTab }
                            values = {[ 'Login', 'Register' ]}
                            selectedIndex = { this.state.selectedIndex }
                            onTabPress = { this.indexChange }
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        passError: state.authentication.passError,
        emailError: state.authentication.emailError,
        showLoading: state.authentication.showLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, pass) => { dispatch(loginRequest(email, pass)) },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
    defaultView: {
        flex: 1,
        position: 'relative'
    },
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
    mainView: {
        width: '100%',
        height: '100%',
        flex: 1,
        position: 'absolute',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    topView: {
        marginTop: Dimensions.get('window').height * 0.2,
        alignItems: 'center'
    },
    logoTitle: {
        fontWeight: 'bold',
        fontSize: 45,
        color: 'white'
    },
    logoSubtitle: {
        fontSize: 15,
        color: 'white'
    },
    mailView: {
        width: 100,
        height: 100,
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
    },
    mailImage: {
        width: 50,
        height: 50
    },
    middleView: {
        height: 35,
        width: '70%'
    },
    defaultTab: {
        backgroundColor: 'transparent',
        height: 35,
        width: '70%'
    },
    defaultTabText: {
        color: 'white',
        fontSize: 15
    },
    activeTab: {
        backgroundColor: '#3787D9'
    },
    backgroundCover: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0, 0.3)'
    }
})


{/* <TextInput
style={{height: 40}}
placeholder="Email"
onChangeText={(text) => this.setState({email: text})}
/>
{this.props.emailError && <Text>{this.props.emailError}</Text>}
<TextInput
style={{height: 40}}
placeholder="Pass"
onChangeText={(text) => this.setState({pass: text})}
/>
{this.props.passError && <Text>{this.props.passError}</Text>}
<Button title="Submit" onPress={() => this.login()}/>
{this.props.showLoading && <ActivityIndicator />} */}