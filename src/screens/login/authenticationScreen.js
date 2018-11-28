import React, {Component} from 'react';
import {Text, View, TextInput, Button, ActivityIndicator, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {loginRequest} from './authenticationAction';
import LoginView from '../../components/LoginView';

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {email: null, pass: null};
    }

    login = (result) => {
        const email = result.email;
        const pass = result.pass;
        this.props.onLogin(email, pass);
    };

    render() {
        return(
            <View>
                <LoginView callback = {this.login.bind(this)} />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        passError: state.login.passError,
        emailError: state.login.emailError,
        showLoading: state.login.showLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, pass) => { dispatch(loginRequest(email, pass)) },
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (LoginScreen);

const styles = StyleSheet.create({
    defaultView: {
        flex: 1
    },
    backgroundImage: {
        flex: 1
    },
    mainView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    topView: {

    },
    middleView: {

    }
})