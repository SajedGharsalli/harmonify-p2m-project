import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Button({ index, onPress }) {
    if (index === "3") {
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Text>Get Started</Text>
            </TouchableOpacity>
        );
    } else {
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#80bfff',
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        top: 60
    },
});
