import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import SplashScreen from './src/screens/splash/splashScreen';
import LoginScreen from './src/screens/login/loginScreen';
import MainScreen from './src/screens/main/mainScreen';
import LandingScreen from './src/screens/landing/landingScreen'
import store from './src/app/store';
import { Provider } from "react-redux";
import './config/Reactotron';
import PollsMainScreen from './src/screens/polls/pollsMainScreen';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Stack key="root">
                        <Scene key="splash" component={SplashScreen} title="Splash" hideNavBar initial />
                        <Scene key="landing" component={LandingScreen} title="Landing" hideNavBar />
                        <Scene key="login" component={LoginScreen} title="Login" />
                        <Scene key="main" component={MainScreen} title="Main" hideNavBar />
                        <Scene key="polls" component={PollsMainScreen} title="PollsScreen" hideNavBar />
                    </Stack>
                </Router>
            </Provider>
        );
    }
}
