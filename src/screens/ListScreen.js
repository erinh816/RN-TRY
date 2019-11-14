import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 21 },
        { name: 'Friend #2', age: 25 },
        { name: 'Friend #3', age: 29 },
        { name: 'Friend #4', age: 21 },
        { name: 'Friend #5', age: 33 },
        { name: 'Friend #6', age: 21 },
        { name: 'Friend #7', age: 23 },
        { name: 'Friend #8', age: 33 },
        { name: 'Friend #9', age: 99 },
    ]
    return (
        <FlatList
            // horizontal={true} //or just horizontal itself
            showsVerticalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 30,
    }

});

export default ListScreen;