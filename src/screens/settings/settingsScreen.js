import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux'
import SwitchToggle from 'react-native-switch-toggle';
import {getUser, updateUser} from "./settingsAction";
import {Body, Button, Header, Right, Label, Item, Input} from "native-base";
import HeaderMenu from "../../components/HeaderMenu";

class SettingsScreen extends Component {

    componentDidMount() {
        this.getUser();
    }

    constructor(props) {
        super(props);
        this.state = {
            switchOn4: false,
            user: {},
            headerHeight: 88
        };
    }

    getUser = () => {
        this.props.getUser();
    };

    update = () => {
        this.props.onUpdateUser(this.state.user);
    };

    switchNotification = () => {
        this.setState({switchOn: !this.state.switchOn});
        this.setState({ user: { notification: this.state.switchOn} })
    }

    measureToolbar = (e) => {
        this.setState({ headerHeight: e.nativeEvent.layout.height })
    }

    render() {
        const {emailError, passError, nameError, user} = this.props;

        return (
            <View style={styles.defaultView}>
                <HeaderMenu title="Settings" right={
                    <Button transparent onPress={this.update} >
                        <Text style={styles.textBtn}> UPDATE </Text>
                    </Button>
                } actionOnMeasure={this.measureToolbar}/>
                <View style={styles.topView}>
                    <View style={styles.leftTopView}>
                        <Image source={require('./../../../app_image/rugby.jpg')} style={styles.userProfileImg}/>
                    </View>
                    <View style={styles.rightTopView}>
                        <Text style={styles.title}> Display Name </Text>
                        <TextInput style={styles.subtitle}
                                   placeholder="Name"
                                   placeholderTextColor="grey"
                                   onChangeText={(text) => this.setState({user: {name: {text}}})}
                                   style={styles.subtitle}> {this.props.user.name} </TextInput>
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <View style={styles.sectionView}>
                        <Text style={styles.section}>Account Information </Text>
                        <Item stackedLabel>
                            <Label>Email</Label>
                            <Input onChangeText={(text) => this.setState({user: {...user, email: text}})}>
                                {this.props.user.email}
                            </Input>
                        </Item>
                        <Item stackedLabel>
                            <Label>Password</Label>
                            <Input onChangeText={(text) => this.setState({user: {...user, pass: text}})}>
                                {this.props.user.pass}
                            </Input>
                        </Item>
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
                                onPress={this.switchNotification}
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
        user: state.settings.user,
        passError: state.settings.passError,
        emailError: state.settings.emailError,
        nameError: state.settings.nameError
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => {dispatch(getUser())},
        onUpdateUser: (user) => {dispatch(updateUser(user))}
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
    textBtn: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold",
        color: "white"
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
    centerTitleView: {
        textAlign: "center",
        fontSize: 25,
        marginBottom: 20,
        marginTop: 5,
        color: "black"
    },
})