import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import ImageDetail from '../components/ImageDetail';


const ImageScreen = () => {
    return (
        <View>
            <ImageDetail imageName='Beach' imageItself={require('../../assets/beach.jpg')} imageScore='9' />
            <ImageDetail imageName='Forest' imageItself={require('../../assets/forest.jpg')} imageScore='7' />
            <ImageDetail imageName='Mountain' imageItself={require('../../assets/mountain.jpg')} imageScore='4' />
        </View>
    )
};

//imageName above is prop we create

const styles = StyleSheet.create({});

export default ImageScreen;