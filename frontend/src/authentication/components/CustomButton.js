import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#80bfff',
        alignItems: 'center',
        marginTop: 20,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
})
