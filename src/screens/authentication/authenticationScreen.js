import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableHighlight, ScrollView } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { connect } from 'react-redux'
import {Button} from 'native-base';
import { loginRequest, registerRequest } from './authenticationAction';
import LoginView from './../../components/LoginView';
import RegisterView from './../../components/RegisterView';
import {Actions} from 'react-native-router-flux';

class AuthenticationScreen extends Component {

    title = 'ROTOLEGENDS';
    subtitle = 'FANTASY NEWS';

    constructor(props) {
        super(props);
        this.state = { 
            email: null,
            pass: null,
            selectedIndex: 0
        };
    }

    register = (result) => {
        const name = result.name;
        const email = result.email;
        const pass = result.pass;
        this.props.onRegister(name, email, pass);
    };

    login = (result) => {
        const email = result.userEmail;
        const pass = result.userPass;
        this.props.onLogin(email, pass);
    };

    indexChange = (index) => {
        this.setState({
            ...this.state,
            selectedIndex: index
        })
    };

    goBackBtnAction = () => {
        Actions.pop();
    };

    render() {
        const {emailError, passError, nameError} = this.props;

        return (
            <View style = { styles.defaultView }>
                <Image style={ styles.backgroundImage } source = { require('./../../../app_image/rugby.jpg') }/>
                <View style={styles.backgroundCover}/>
                <View style = { styles.mainView }>
                    <ScrollView>
                        <View style = {styles.scrollViewContainer}>
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
                            <View style = { styles.bottomView }>
                            { this.state.selectedIndex == 0 && <LoginView actionLogin = { this.login } emailError={emailError} passError={passError}/>} 
                            { this.state.selectedIndex == 1 && <RegisterView actionRegister = { this.register } emailError={emailError} passError={passError} nameError={nameError}/>}
                            </View>
                            <Button transparent onPress={() => this.goBackBtnAction()}>
                                <Text style={styles.backText}>Go Back</Text>
                            </Button>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        passError: state.authentication.passError,
        emailError: state.authentication.emailError,
        nameError: state.authentication.nameError,
        showLoading: state.authentication.showLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, pass) => { dispatch(loginRequest(email, pass)) },
        onRegister: (name, email, pass) => {dispatch (registerRequest(name, email, pass))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationScreen);

const styles = StyleSheet.create({
    userCredentials: {
        width: '90%',
        margin: 15,
    },
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
        backgroundColor: 'transparent'
    },
    topView: {
        marginTop: Dimensions.get('window').height * 0.2,
        alignItems: 'center'
    },
    logoTitle: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'white'
    },
    logoSubtitle: {
        fontSize: 15,
        color: 'white'
    },
    scrollViewContainer: {
        flexGrow : 1,
        alignItems: 'center',
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
        width: '70%',
        marginTop: 30
    },
    defaultTab: {
        backgroundColor: 'transparent',
        height: 35,
        width: '70%',
        borderColor: '#3787D9'
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
    },
    bottomView: {
        marginTop: 60,
        width: '90%',
        height: 'auto'
    },
    buttonView: {
        height: 'auto'
    },
    backText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 20
    },
    textView: {
        width: '30%',
        paddingVertical: 15,
        paddingHorizontal: 5
    }
})