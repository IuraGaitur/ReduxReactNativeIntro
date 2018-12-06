import React, { Component } from "react";
import { View, Button, Image, CameraRoll } from "react-native";
import { ImagePicker } from 'react-native-image-crop-picker'
import { connect } from "react-redux";

class PhotoUpload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrl: 'https://sigma-static-files.imgix.net/default_profile_pic.png'
        }
    };


    takePhoto = async () => {
        let pickerResult = await ImagePicker.launchCameraAsync({
            exif: true,
            allowsEditing: true,
            quality: 0.7,
            base64: true,
            aspect: [4, 3]
        })
    };

    choosePhoto = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            exif: true,
            allowsEditing: false,
            quality: 0.7,
            base64: true
        })
    }

    render() {
        const { menuIsVisible } = this.state;
        return (
            <View>
                <Image source={{ uri: this.state.imageUrl }} />
                <Button onPress={this.takePhoto} title={'Take a photo'} />
                <Button onPress={this.choosePhoto} title={'Choose a photo'} />
            </View>
        );
    }
}

export default connect()(PhotoUpload);