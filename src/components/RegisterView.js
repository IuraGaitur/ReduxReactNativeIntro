import React, {Component} from 'react';
import {Text, View, TextInput, Button, ActivityIndicator, StyleSheet, TouchableHighlight} from 'react-native';
  
export default class RegsterView extends Component {

    constructor(props) {
        super(props);
        this.state = {email: null, pass: null, name: null};
    }

    registerAction = () => {
        this.props.actionRegister(this.state);
    }
    
    render() {
        return(
            <View>
                <TextInput
                    style={style.textField}
                    placeholder="Email"
                    placeholderFontSize="20"
                    placeholderTextColor="#FFF" 
                    onChangeText={(text) => this.setState({email: text})}
                />
                {/* {this.props.emailError && <Text>{this.props.emailError}</Text>} */}
                <TextInput
                    style={style.textField}
                    placeholder="Password"
                    placeholderTextColor="#FFF" 
                    placeholderFontSize="15"
                    onChangeText={(text) => this.setState({pass: text})}
                />
                {/* {this.props.passError && <Text>{this.props.passError}</Text>} */}
                <TextInput
                    style={style.textField}
                    placeholder="Your Name"
                    placeholderTextColor="#FFF" 
                    onChangeText={(text) => this.setState({name: text})}
                />
                {/* {this.props.passError && <Text>{this.props.passError}</Text>} */}
                <TouchableHighlight
                    style = {style.button}
                    onPress={() => this.registerAction()}
                >
                    <Text style = {style.buttonText} >REGISTER</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const style = StyleSheet.create({
    textField: {
        height: 45,
        fontSize: 20,
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
