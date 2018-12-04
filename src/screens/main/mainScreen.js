import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Container, View, Text } from 'native-base';
import { ToastAndroid, TouchableHighlight, StyleSheet } from "react-native";
import MainScreenToolbar from "./../../components/MainScreenToolbar";
import BottomNavigationBar from "./../../components/BottomNavigationBar";


class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {headerHeight: 88}
    }


    componentDidMount() {}

    measureToolbar = (e) => {
        console.log("data", e.nativeEvent.layout.height);
        this.setState({headerHeight: e.nativeEvent.layout.height})
    }

    render() {
        return (
            <Container>
                <View style={{height: '100%', position: 'absolute', zIndex: -1, paddingTop: this.state.headerHeight}}>
                    <BottomNavigationBar
                        nflPage={<View>
                                    <Text>1 page</Text>
                                 </View>}
                        mblPage={<View>
                                    <Text>2 page</Text>
                                </View>}
                        myNewsPage={<View>
                                    <Text>3 page</Text>
                                </View>}
                        pollsPage={<View>
                                    <Text>4 page</Text>
                                </View>}
                        />
                </View>
                <View style={{flex: 0}} >
                    <MainScreenToolbar actionOnMeasure={this.measureToolbar}/>
                </View>
            </Container>);
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);