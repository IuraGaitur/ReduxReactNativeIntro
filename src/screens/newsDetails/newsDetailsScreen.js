import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux';
import { Text, View, StyleSheet, Image, Dimensions, TouchableHighlight, ScrollView, TouchableWithoutFeedback } from 'react-native';
import NewsCategoryToolbar from './../../components/NewsCategoryToolbar'

class NewsDetailsScreen extends Component {

    shortText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae tortor eu justo auctor ultricies sit amet nec arcu.';
    longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae tortor eu justo auctor ultricies sit amet nec arcu. Duis elementum nec quam id vestibulum. Ut sed purus odio. Nunc luctus ex sit amet eros viverra placerat. Morbi condimentum orci dolor, egestas iaculis nulla fermentum vel. Phasellus non nisl id risus maximus scelerisque id nec dui. Cras maximus nisl eu justo fermentum, ut mollis ipsum dignissim. Donec commodo quis odio vel lacinia. Integer viverra sem congue, faucibus quam ultrices, luctus libero. Integer finibus, nunc id placerat tempor, quam felis semper libero, ut ultricies risus arcu in odio. Sed a interdum quam. Etiam eget vulputate lectus, id malesuada tellus. Vivamus blandit tristique justo aliquam faucibus. In magna lorem, euismod ac consectetur ac, aliquet in leo. Vivamus dolor purus, tempor eget erat vel, congue viverra mauris.Nulla ut sapien quis ipsum lacinia placerat at ut sapien. Mauris sed arcu est. Aliquam vestibulum quam quis mauris consectetur imperdiet. Vivamus ante turpis, accumsan eu metus eu, pretium faucibus tellus. Nullam in congue nisl, nec volutpat urna. Suspendisse semper turpis eros, at vestibulum nulla malesuada eget. Quisque eleifend diam faucibus purus porta, at scelerisque dui suscipit. Etiam consequat volutpat libero in molestie. Mauris magna lacus, efficitur sed gravida sed, mollis eu sapien. Sed eu metus sed enim aliquam pellentesque at sit amet quam. Suspendisse finibus fermentum risus quis lacinia. Duis euismod, urna id tempus molestie, tellus diam dapibus tortor, ac gravida ligula purus eu erat. Donec rhoncus urna vitae neque venenatis, vel convallis enim vehicula. Fusce tristique magna sed est luctus pellentesque. Ut nec justo ut dolor iaculis scelerisque vitae id enim. Ut fringilla vel turpis sed malesuada. Maecenas volutpat purus velit, sed dictum augue semper vel. Aenean viverra maximus diam, eu porta ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec eu dolor erat. Etiam laoreet, arcu quis volutpat congue, leo massa pharetra magna, at eleifend massa massa quis nunc. Sed iaculis fringilla diam et rhoncus.';

    constructor(props) {
        super(props)
        this.state = {
            isStarEnabled: false,
        };
    }

    displayStar = () => {
        if (this.state.isStarEnabled) {
            return <Image source = {require('./../../assets/blue_star.png')} style = { style.starImage }/>;
        } else {
            return <Image source = {require('./../../assets/gray_star.png')} style = { style.starImage }/>; 
        }
    }

    starPressed = () => {
        this.setState({
            isStarEnabled: !this.state.isStarEnabled
          })
    }

    render() {

        let picture = { uri: 'https://usatftw.files.wordpress.com/2015/09/n0fd1z6xmhigb0eej3323ebwq.png' }

        return (
            <View style = { style.screenView }>
                <NewsCategoryToolbar showTitle={true} title={"Details"}/>
                <ScrollView style = { style.container } >
                    <View style = { style.header } >
                        <Image 
                            style = { style.image }
                            source = { picture } />
                        <View style = { style.titleView }>
                            <Text style = { style.titleBlack }>DeMarco</Text>
                            <Text style = { style.titleBlue }>RB</Text>
                        </View>
                        <TouchableWithoutFeedback
                            onPress = { this.starPressed }>
                            {this.displayStar()}
                        </TouchableWithoutFeedback>
                    </View>
                    <Text style = { style.descriptionText }>{ this.shortText }</Text>
                    <Text style = { style.articleText }>{ this.longText }</Text>
                    <View style = { style.bottom }>
                        <Text style = { style.bottomText }>Source: ESPN</Text>
                        <Text style = { style.bottomText }>Dec 16, 2014 @ 11:11AM</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


const style = StyleSheet.create({
    screenView: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 20,
        marginTop: 20,
        marginBottom: 15,
    },
    titleView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: '30%',
        height: 80,
        marginRight: 10,
        marginTop: 'auto',
        marginBottom: 'auto',
        resizeMode: 'contain',
    },
    starImage: {
        width: 30,
        height: 30,
        marginRight: 10,
        marginTop: 'auto',
        marginBottom: 'auto',
        resizeMode: 'stretch'
    },
    titleBlack: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    descriptionText: {
        fontSize: 15,
        margin: 20,
        marginTop: 0,
        fontWeight: 'bold',
    },
    articleText: {
        fontSize: 15,
        margin: 20,
        marginTop: 0,
    },
    titleBlue: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#66B2FF',
        marginLeft: 5
    },
    bottom: {
        margin: 20,
        marginTop: 0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottomText: {
        fontSize: 13,
        marginTop: 3,
        color: 'gray'
    }
});

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetailsScreen);