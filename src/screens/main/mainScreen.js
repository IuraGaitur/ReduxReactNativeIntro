import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux'

class MainScreen extends Component {

    render() {
        return (
            <View>
                <Text>{this.props.email}</Text>
            </View>);
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.login.user.email
    };
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);