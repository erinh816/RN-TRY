import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from 'react-native';



const ImageDetail = (props) => {

    return (
        <View>
            <Image source={props.imageItself} />
            <Text>{props.imageName}</Text>
            <Text>Image Score - ${props.imageScore}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageDetail;

//simplified version

// const ImageDetail = ({ imageItself, imageName, imageScore }) => {
//     return (
//         <View>
//             <Image source={imageIteself} />
//             <Text>{imageName}</Text>
//             <Text>Image Score - {imageScore}</Text>
//         </View>
//     );
// };
