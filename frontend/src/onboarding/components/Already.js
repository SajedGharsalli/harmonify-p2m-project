import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Already() {
    return (
        <View style={styles.container} >
            <Text style={styles.text}>Already have an account ?</Text>
            <TouchableOpacity><Text style={styles.link}>Sign In</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        bottom: 40,
    },
    text: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
    link: {
        fontSize: 16,
        marginLeft: 15,
        textDecorationLine: 'underline',
        color: '#007bff',
    }
})
