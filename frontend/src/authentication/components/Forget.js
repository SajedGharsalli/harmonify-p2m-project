import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Forget = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.text}>Forget password ?</Text>
            <TouchableOpacity><Text style={styles.link}>Reset</Text></TouchableOpacity>
        </View>
    )
}

export default Forget

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 12,
        marginTop: 5
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