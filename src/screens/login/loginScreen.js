import React, {Component} from 'react';
import {Text, View, TextInput, Button, ActivityIndicator, StyleSheet} from 'react-native';
import {connect} from 'react-redux'
import {loginRequest} from './loginAction';

class LoginScreen extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = { email: null, pass: null };
    }

    login = () => {
        const email = this.state.email;
        const pass = this.state.pass;
        this.props.onLogin(email, pass);
    };

    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Email"
                    onChangeText={(text) => this.setState({ email: text })}
                />
                {this.props.emailError && <Text>{this.props.emailError}</Text>}
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Pass"
                    onChangeText={(text) => this.setState({ pass: text })}
                />
                {this.props.passError && <Text>{this.props.passError}</Text>}
                <Button title="Submit" onPress={() => this.login()} />
                {this.props.showLoading && <ActivityIndicator />}
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

