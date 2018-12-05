import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import AuthenticationScreen from './src/screens/authentication/authenticationScreen';
import SplashScreen from './src/screens/splash/splashScreen';
import MainScreen from './src/screens/main/mainScreen';
import FindPlayersScreen from './src/screens/find_players/findPlayersScreen';
import NewsDetailsScreen from './src/screens/newsDetails/newsDetailsScreen';
import SettingsScreen from './src/screens/settings/settingsScreen'
import LandingScreen from './src/screens/landing/landingScreen'
import store from './src/app/store';
import { Provider } from "react-redux";
import './config/Reactotron';
import PollsMainScreen from './src/screens/polls/pollsMainScreen';
import PollsUserScreen from './src/screens/pollsUser/pollsUserScreen';
import NewsCategoryScreen from './src/screens/newsCategoryList/newsCategoryScreen';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Stack key="root">
                        <Scene key="splash" component={SplashScreen} title="Splash" hideNavBar />
                        <Scene key="authentication" component={AuthenticationScreen} title="Authentication" hideNavBar />
                        <Scene key="landing" component={LandingScreen} title="Landing" hideNavBar />
                        <Scene key="main" component={MainScreen} title="Main" hideNavBar />
                        <Scene key="polls" component={PollsMainScreen} title="PollsScreen" hideNavBar />
                        <Scene key="findPlayers" component={FindPlayersScreen} title="FindPlayers" hideNavBar />
                        <Scene key="settings" component={SettingsScreen} title="Settings" hideNavBar />
                        <Scene key="news" component={NewsCategoryScreen} title="News" hideNavBar />
                        <Scene key="pollsUser" component={PollsUserScreen} title="PollsUserScreen" hideNavBar />
                        <Scene key="newsDetails" component={NewsDetailsScreen} title="NewsDetails" hideNavBar initial />
                    </Stack>
                </Router>
            </Provider>
        );
    }
}
