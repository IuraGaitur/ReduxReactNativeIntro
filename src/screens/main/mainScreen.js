import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import MainScreenToolbar from "./../../components/MainScreenToolbar";
import BottomNavigationBar from "./../../components/BottomNavigationBar";


class MainScreen extends Component {

    render() {
        return (
            <Container>
                {<MainScreenToolbar />}
                <Content>
                    <Text>
                        {this.props.email}
                    </Text>
                </Content>
                {<BottomNavigationBar />}
            </Container>);
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