import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import AuthenticationScreen from './src/screens/authentication/authenticationScreen';
import MainScreen from './src/screens/main/mainScreen';
import store from './src/app/store';
import {Provider} from "react-redux";
import './config/Reactotron';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Stack key="root">
                        <Scene key="authentication" component={AuthenticationScreen} title="Authentication" initial hideNavBar/>
                        <Scene key="main" component={MainScreen} title="Main"/>
                    </Stack>
                </Router>
            </Provider>
        );
    }
}
