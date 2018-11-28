import React, {Component} from 'react';
import {Text, View, TextInput, Button, ActivityIndicator, StyleSheet, TouchableHighlight} from 'react-native';

export default class LoginView extends Component {

    constructor(props) {
        super(props);
        this.state = {email: null, pass: null};
    }

    loginAction = () => { 
        this.props.callback(this.state);
    }
    
    render() {
        return(
            <View>
                <TextInput
                    style={style.textField}
                    placeholder="Email"
                    onChangeText={(text) => this.setState({email: text})}
                />
                {/* {this.props.emailError && <Text>{this.props.emailError}</Text>} */}
                <TextInput
                    style={style.textField}
                    placeholder="Password"
                    onChangeText={(text) => this.setState({pass: text})}
                />
                {/* {this.props.passError && <Text>{this.props.passError}</Text>} */}
                <TouchableHighlight
                    style = {style.button}
                    onPress={this.loginAction()}
                >
                    <Text style = {style.buttonText} >LOGIN</Text>
                </TouchableHighlight>
                {/* <Button 
                    style = {style.button}
                    title="Submit" 
                    onPress={this.loginAction()}
                />
                {this.props.showLoading && <ActivityIndicator />} */}
            </View>
        );
    }
}

const style = StyleSheet.create({
    textField: {
        height: 45,
        borderBottomWidth: 1,
        borderColor: 'grey',
        marginBottom: 10,
    },
    button: {
        height: 45,
        margin: 10,
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    buttonText: {
        color: 'white',
    }
});
