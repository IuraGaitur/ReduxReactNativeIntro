import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, Image, TouchableOpacity, Button, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {Body, Header, Left, Right} from "native-base";
import CommentItem from './components/CommentItem';
import {Actions} from 'react-native-router-flux';

class CommentsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [{profileImage: './../../../assets/rugby.jpg', name: "Ion", date: "5 mins ago", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
                {profileImage: './../../../assets/rugby.jpg', name: "ana", date: "5 mins ago", comment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                {profileImage: './../../../assets/rugby.jpg', name: "Iosdasn", date: "5 mins ago", comment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}]
        }
    }

    componentDidMount() {
        let comment = [{profileImage: './../../../assets/rugby.jpg', name: "Ion", date: "5 mins ago", comment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
            {profileImage: './../../../assets/rugby.jpg', name: "ana", date: "5 mins ago", comment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
            {profileImage: './../../../assets/rugby.jpg', name: "Iosdasn", date: "5 mins ago", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}]
        this.setState({comments: comment})
    }

    addComment = () => {
        // this.props.onUpdateUser(this.state.user);
    };

    back = () => {
        this.finished;// this.props.onUpdateUser(this.state.user);
    };

    _actionComments() {
        // TODO, do something when user presses on comments
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    androidStatusBarColor="#66B2FF"
                    style={{ backgroundColor: "#66B2FF", color: '#66B2FF' }}>
                    <Left>
                        <Button 
                            transparent title={"BACK"} color="white"
                            style = { styles.headerBackButton } onPress={() => {Actions.pop()}}>
                        </Button>
                    </Left>
                    <Body>
                    <View style={styles.middleView}>
                        <Text style={styles.titleNav}>Comments</Text>
                    </View>
                    </Body>
                    <Right>
                        <View></View>
                    </Right>
                </Header >
                <FlatList
                    data={this.state.comments}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) =>
                        <CommentItem name = {item.name} date = {item.date} comment = {item.comment} image = {item.profileImage}/>
                    }
                    keyExtractor={item => item.keyExtractor}
                />
                <View style={styles.bottomView}>
                    <TextInput placeholder="Write a comment..."
                               placeholderTextColor="#BFBFBF"
                               style={styles.searchTxt}></TextInput>
                    <TouchableOpacity
                        style={styles.addBtn}
                        onPress={this.addComment}>
                        <Image
                            source={require('./../../assets/plus.png')}
                            style={styles.image}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    headerBackButton: {
        color: 'white'
    },
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'white',
    },
    secondContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 18,
        paddingStart: 15,
        paddingEnd: 15,
        marginBottom: 10,
        backgroundColor: "white",
    },
    userProfileImg: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
    },
    name: {
        textAlign: "left",
        fontSize: 20,
        width: "65%",
        paddingTop: 5,
        fontWeight: "normal",
        height: "100%",
        color: "black"
    },
    date: {
        textAlign: "right",
        fontSize: 15,
        paddingTop: 7,
        fontWeight: "normal",
        color: "grey"
    },
    comment: {
        textAlign: "left",
        fontSize: 15,
        fontWeight: "normal",
        color: "grey"
    },
    containerImg: {
        marginVertical: "auto",
        alignItems: 'center',
        backgroundColor: "white",
        width: 40,
        height: 40,
    },
    topView: {
        flexDirection: "row",
        width: "100%",
        backgroundColor: "white",
        marginBottom: 10,
    },
    bottomView: {
        flexDirection: "row",
        backgroundColor: "white",
        marginBottom: 0,
        width: "100%",
        borderTopWidth: 1,
        paddingLeft: 20,
        borderTopColor: "#E5E5E5",
        alignItems: 'center',
    },
    searchTxt: {
        flex: 1,
        textAlign: "left",
        fontSize: 25,
        fontWeight: 'bold',
        marginEnd: 10,
        marginStart: 5,
        color: "black"
    },
    addBtn: {
        flex: 0,
        textAlign: "left",
        width: 70,
        height: 70,
        backgroundColor: "#3787D9",
    },

    image: {
        width: 47,
        height: 47,
        margin: 10
    },
    touchable: {
        justifyContent: 'space-between',
        width: 70,
        backgroundColor: "#66B2FF",
    },

    titleNav: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "normal",
        color: "white"
    },
    centerTitleView: {
        textAlign: "center",
        fontSize: 25,
        marginBottom: 20,
        marginTop: 5,
        color: "black"
    },
})

export default connect()(CommentsScreen);