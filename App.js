import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import SplashScreen from './src/screens/splash/splashScreen';
import LoginScreen from './src/screens/login/loginScreen';
import MainScreen from './src/screens/main/mainScreen';
import LandingScreen from './src/screens/landing/landingScreen'
import FindPlayersScreen from './src/screens/find_players/findPlayersScreen'
import store from './src/app/store';
import { Provider } from "react-redux";
import './config/Reactotron';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Stack key="root">
                        <Scene key="splash" component={SplashScreen} title="Splash"  hideNavBar />
                        <Scene key="landing" component={LandingScreen} title="Landing" hideNavBar />
                        <Scene key="login" component={LoginScreen} title="Login" />
                        <Scene key="main" component={MainScreen} title="Main" hideNavBar />
                        <Scene key="find_players" component={FindPlayersScreen} title="FindPlayers" initial/>
                    </Stack>
                </Router>
            </Provider>
        );
    }
}
