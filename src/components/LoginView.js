import React, {Component} from 'react';
import {Text, View, TextInput, Button, ActivityIndicator, StyleSheet, TouchableHighlight} from 'react-native';

export default class LoginView extends Component {

    constructor(props) {
        super(props);
        this.state = {userEmail: null, userPass: null};
    }

    loginAction = () => { 
        this.props.actionLogin(this.state);
    }
    
    render() {
        return(
            <View>
                <TextInput
                    style={style.textField}
                    placeholder="Email"
                    placeholderTextColor="#FFF" 
                    onChangeText={(text) => this.setState({userEmail: text})}
                />
                {this.props.emailError && <Text>{this.props.emailError}</Text>}
                <TextInput
                    style={style.textField}
                    placeholder="Password"
                    placeholderTextColor="#FFF" 
                    onChangeText={(text) => this.setState({userPass: text})}
                />
                {this.props.passError && <Text>{this.props.passError}</Text>}
                <TouchableHighlight
                    style = {style.button}
                    onPress={() => this.loginAction()}
                >
                    <Text style = {style.buttonText} >LOGIN</Text>
                </TouchableHighlight>
                {/* <Button 
                    style = {style.button}
                    title="Submit" 
                    onPress={this.loginAction()}
                /> */}
                {this.props.showLoading && <ActivityIndicator />} 
            </View>
        );
    }
}

const style = StyleSheet.create({
    textField: {
        height: 45,
        borderBottomWidth: 1,
        borderColor: 'white',
        marginBottom: 10,
        color: 'white',
    },
    button: {
        height: 45,
        marginVertical: 10,
        alignItems: 'center',
        paddingVertical: 'auto',
        backgroundColor: '#0080FF'
    },
    buttonText: {
        marginVertical: 10,
        fontSize: 20,
        color: 'white',
    }
});
