import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title='Go to Components Demo' />

      <Button
        title='Go to List Demo'
        onPress={() => navigation.navigate('List')} />

      <Button
        title='Go to Image Demo'
        onPress={() => navigation.navigate('Image')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;


  //the original version of how to use props.navigation
// const HomeScreen = (props) => {
//   return (
//     <View>
//       <Text style={styles.text}>HomeScreen</Text>
//       <Button
//         onPress={() => props.navigation.navigate('Components')}
//         title='Go to Components Demo' />

//       <Button
//         title='Go to List Demo'
//         onPress={() => props.navigation.navigate('List')} />
//     </View>
//   );
// };

//because navigation is one property of the props object
//usually we only want 1 or 2 properties off of the props object 
