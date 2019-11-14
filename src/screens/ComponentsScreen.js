import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'My name is haha'
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native!</Text>
            <Text style={styles.nameStyle}>{name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    nameStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;

//****************************** 
//inline style (between import & export)
// consot ComponentsScreen =()=>{
//     return <Text style ={{fontSize:30}}> This is the components screen </Text>;
// }
//******************************* 