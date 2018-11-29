import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux'
import SwitchToggle from 'react-native-switch-toggle';
import {getUser} from "./settingsAction";

class SettingsScreen extends Component {

    componentDidMount() {
        this.getUser();
    }

    constructor(props) {
        super(props);
        this.state = {
            switchOn4: false,
            email: null
        };
    }

    getUser = () => {
        this.props.getUser()
    };

    swichPress = () => {
        this.setState({ switchOn: !this.state.switchOn });
    }

    render() {
        return (
            <View style={styles.defaultView}>
                <View style={styles.topView}>
                    <View style={styles.leftTopView}>
                        <Image source={require('./../../../app_image/rugby.jpg')} style={styles.userProfileImg}/>
                    </View>
                    <View style={styles.rightTopView}>
                        <Text style={styles.title}> Display Name </Text>
                        <Text style={styles.subtitle}> { this.props.user.name } </Text>
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <View style={styles.sectionView}>
                        <Text style={styles.section}> Account Information </Text>
                        <Text style={styles.title}> Email Address </Text>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="grey"
                            style={styles.subtitle}> { this.props.user.email } </TextInput>
                        <Text style={styles.title}> Password </Text>
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Password"
                            placeholderTextColor="grey"
                            style={styles.subtitle}>  </TextInput>
                    </View>
                    <View style={styles.sectionView}>
                        <Text style={styles.section}> Notification Settings </Text>
                        <View style={styles.pushStack}>
                            <Text style={styles.pushTitle}>Push Notification </Text>
                            <SwitchToggle
                                containerStyle={{
                                    width: 60,
                                    height: 35,
                                    borderRadius: 17.5,
                                    padding: 4,
                                }}
                                backgroundColorOn='#3787D9'
                                backgroundColorOff='#e5e1e0'
                                circleStyle={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: 16,
                                    backgroundColor: '#3787D9', // rgb(102,134,205)
                                }}
                                switchOn={this.state.switchOn}
                                onPress={this.swichPress}
                                circleColorOff='#3787D9'
                                circleColorOn='white'
                                duration={500}
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    return {
         user: state.settings.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => { dispatch(getUser()) },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);

const styles = StyleSheet.create({
    defaultView: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
    },
    topView: {
        flexDirection: "row",
        backgroundColor: "white",
        width: "100%",
        padding: 10,
    },
    bottomView: {
        flexDirection: "column",
        backgroundColor: "white",
        width: "100%",
    },
    sectionView: {
        flexDirection: "column",
        backgroundColor: "white",
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 0,
        marginTop: 0,
        borderBottomWidth: 1,
        borderColor: "grey"
    },
    leftTopView: {
        marginVertical: "auto",
        alignItems: 'center',
        backgroundColor: "white",
        width: 80,
        height: 80,
    },
    rightTopView: {
        flex: 1,
        margin: 10,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderColor: "grey"
    },
    userProfileImg: {
        width: "100%",
        height: "100%",
        borderRadius: 40,
    },
    title: {
        textAlign: "left",
        fontSize: 15,
        fontWeight: "normal",
        color: "grey"
    },
    pushTitle: {
        textAlign: "left",
        fontSize: 20,
        fontWeight: "normal",
        marginBottom: 20,
        backgroundColor: "white",
        color: "grey"
    },
    switchView: {
        marginTop: 16,
        width: 108,
        height: 48,
        borderRadius: 25,
        backgroundColor: '#ccc',
        padding: 5
    },
    pushStack: {
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "white"
    },
    section: {
        textAlign: "left",
        fontSize: 25,
        fontWeight: "normal",
        marginBottom: 10,
        marginTop: 20,
        color: "#3787D9"
    },
    subtitle: {
        textAlign: "left",
        fontSize: 25,
        marginBottom: 20,
        marginTop: 5,
        color: "black"
    },

    backgroundCover: {
        width: "100%",
        height: "100%",
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.3)'

    },
    centerView: {
        position: 'absolute',
        alignContent: "center"
    },
})