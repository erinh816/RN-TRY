import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import ImageDetail from '../components/ImageDetail';


const ImageScreen = () => {
    return (
        <View>
            <ImageDetail imageName='Forest' />
            <ImageDetail imageName='Ocean' />
            <ImageDetail imageName='River' />
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageScreen;