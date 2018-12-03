import React, {Component} from 'react';
import {Text, View, TextInput, Button, ActivityIndicator, StyleSheet, TouchableHighlight} from 'react-native';
import {Label, Item, Input, Icon} from 'native-base';
  
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
                <Item floatingLabel>
                    <Label style={style.textInputLabel}>Email</Label>
                    <Input style={style.textField}
                        placeholderTextColor="#FFF" 
                        onChangeText={(text) => this.setState({email: text})}
                    />
                </Item>
                {this.props.emailError && <Text style={{color: 'red'}}>{this.props.emailError}</Text>}

                <Item floatingLabel style={style.inputItem}>
                    <Label style={style.textInputLabel} >Password</Label>
                    <Input style={style.textField}
                            placeholderTextColor="#FFF" 
                            onChangeText={(text) => this.setState({pass: text})}
                    />
                </Item>
                {this.props.passError && <Text style={{color: 'red'}}>{this.props.passError}</Text>}

                <Item floatingLabel style={style.inputItem}>
                    <Label style={style.textInputLabel} >Name</Label>
                    <Input style={style.textField}
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
        backgroundColor: '#0080FF'
    },
    buttonText: {
        marginVertical: 10,
        fontSize: 20,
        color: 'white',
    }
});
