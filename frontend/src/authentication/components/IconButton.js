import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const IconButton = ({ img, text, color }) => {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: color }]}>
            <Image source={img} style={{
                width: 30,
                height: 30,
            }} />
            <Text style={{ fontSize: 16, color: '#fff' }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default IconButton

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: 130,
        height: 40,
        borderRadius: 10
    }
})