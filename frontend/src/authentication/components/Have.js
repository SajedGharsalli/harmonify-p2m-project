import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const DontHave = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.text}>Already Have an account ?</Text>
            <TouchableOpacity>
                <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DontHave

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 12,
        marginTop: 20
    },
    text: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
    link: {
        fontSize: 16,
        marginLeft: 15,
        fontWeight: '600',
        textDecorationLine: 'underline',
        color: '#007bff',
    }
})