<<<<<<< HEAD
import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import AuthenticationScreen from './src/screens/authentication/authenticationScreen';
=======
import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import SplashScreen from './src/screens/splash/splashScreen';
import LoginScreen from './src/screens/login/loginScreen';
>>>>>>> af534b77e15f030ec86e5a60336caf8021b9de7e
import MainScreen from './src/screens/main/mainScreen';
import LandingScreen from './src/screens/landing/landingScreen'
import store from './src/app/store';
import { Provider } from "react-redux";
import './config/Reactotron';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Stack key="root">
<<<<<<< HEAD
                        <Scene key="authentication" component={AuthenticationScreen} title="Authentication" initial hideNavBar/>
                        <Scene key="main" component={MainScreen} title="Main"/>
=======
                        <Scene key="splash" component={SplashScreen} title="Splash"  hideNavBar />
                        <Scene key="landing" component={LandingScreen} title="Landing" hideNavBar />
                        <Scene key="login" component={LoginScreen} title="Login" />
                        <Scene key="main" component={MainScreen} title="Main" hideNavBar initial/>
>>>>>>> af534b77e15f030ec86e5a60336caf8021b9de7e
                    </Stack>
                </Router>
            </Provider>
        );
    }
}
