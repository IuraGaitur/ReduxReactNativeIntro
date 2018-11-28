import React, {Component} from 'react';
import {Text, View, TextInput, Button, ActivityIndicator, StyleSheet} from 'react-native';
  
export default class RegsterView extends Component {

    constructor(props) {
        super(props);
        this.state = {email: null, pass: null, name: null};
    }

    registerAction = () => {
        this.props.callback(this.state);
    }
    
    render() {
        return(
            <View>
                <TextInput
                    style={{height: 40}}
                    placeholder="Email"
                    onChangeText={(text) => this.setState({email: text})}
                />
                {this.props.emailError && <Text>{this.props.emailError}</Text>}
                <TextInput
                    style={{height: 40}}
                    placeholder="Password"
                    onChangeText={(text) => this.setState({pass: text})}
                />
                <TextInput
                    style={{height: 40}}
                    placeholder="Display Name"
                    onChangeText={(text) => this.setState({pass: text})}
                />
                {this.props.passError && <Text>{this.props.passError}</Text>}
                <Button title="Register" onPress={() => this.registerAction()}/>
                {this.props.showLoading && <ActivityIndicator />}
            </View>
        );
    }
}

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