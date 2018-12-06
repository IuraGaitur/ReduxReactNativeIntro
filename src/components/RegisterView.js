import React, {Component} from 'react';
import {Text, View, TextInput, Button, ActivityIndicator, StyleSheet, TouchableHighlight} from 'react-native';
import {Label, Item, Input, Icon} from 'native-base';
  
export default class RegsterView extends Component {

    constructor(props) {
        super(props);
        this.state = {email: null, pass: null, name: null, isSecure: true};
    }

    registerAction = () => {
        this.props.actionRegister(this.state);
    };

    changeVisibility = () => {
        this.setState({isSecure: !this.state.isSecure});
    };
    
    render() {
        return(
            <View>
                <Item floatingLabel>
                    <Label style={style.textInputLabel}>Email</Label>
                    <Input style={style.textField}
                        placeholderTextColor="#FFF"
                           autoCapitalize='none'
                           onChangeText={(text) => this.setState({email: text})}
                    />
                </Item>
                {this.props.emailError && <Text style={{color: 'red'}}>{this.props.emailError}</Text>}

                <Item floatingLabel style={style.inputItem}>
                    <Label style={style.textInputLabel} >Password</Label>
                    <Input style={style.textField}
                            autoCorrect={false}
                            autoCapitalize='none'
                            secureTextEntry={this.state.isSecure}
                            placeholderTextColor="#FFF" 
                            onChangeText={(text) => this.setState({pass: text})}
                    />
                    <Icon active name={this.state.isSecure ? 'eye-off': 'eye'}
                                       onPress={() => this.changeVisibility()} style={{ color: "white" }}/>
                </Item>
                {this.props.passError && <Text style={{color: 'red'}}>{this.props.passError}</Text>}

                <Item floatingLabel style={style.inputItem}>
                    <Label style={style.textInputLabel} >Name</Label>
                    <Input style={style.textField}
                            autoCorrect={false}
                            placeholderTextColor="#FFF" 
                            onChangeText={(text) => this.setState({name: text})}
                    />
                </Item>
                {this.props.nameError && <Text style={{color: 'red'}}>{this.props.nameError}</Text>}

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
    inputItem: {
        marginTop: 10,
    },
    textInputLabel: {
        color: 'white',
    }, 
    textField: {
        height: 45,
        fontSize: 20,
        marginBottom: 10,
        color: 'white',
    },
    button: {
        height: 45,
        marginVertical: 10,
        alignItems: 'center',
        paddingVertical: 'auto',
        backgroundColor: '#3787D9'
    },
    buttonText: {
        marginVertical: 10,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
});
