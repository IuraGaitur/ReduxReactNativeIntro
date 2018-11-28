import React, {Component} from 'react';
import {Text, View, Image, ActivityIndicator, StyleSheet} from 'react-native';
import {connect} from 'react-redux'
import {checkForPrimaryUser} from './splashAction';

class SplashScreen extends Component {

    componentDidMount() {
        this.checkUserIsLoggedIn();
    }

    checkUserIsLoggedIn = () => {
        this.props.checkUserIsLoggedIn()
    };

    render() {
        return(
            <View style={styles.defaultView} >
                <Image source={require('./../../../app_image/rugby.jpg')} style={styles.backgroundImage}/>
                <View style={styles.backgroundCover} />
                <View style={styles.centerView}>
                    <Text style={styles.title} > ROTOLEGENDS</Text>
                    <Text style={styles.subtitle} > FANTASY  NEWS</Text>
                    <ActivityIndicator size={60} color="#3787D9" />
                </View>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkUserIsLoggedIn: () => { dispatch(checkForPrimaryUser()) },
    }
};

export default connect(null, mapDispatchToProps) (SplashScreen);

const styles = StyleSheet.create({
    defaultView: {
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',

    },
    backgroundImage: {
        width:"100%",
        height:"100%",
    },
    title: {
        textAlign: "center",
        fontSize: 45,
        fontWeight: "bold",
        color: "white"
    },
    subtitle: {
        textAlign: "center",
        fontSize: 20,
        marginBottom: 20,
        marginTop: -10,
        color: "white"
    },
    backgroundCover: {
        width:"100%",
        height:"100%",
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.3)'

    },
    centerView: {
        position: 'absolute',
        alignContent: "center"
    },
})