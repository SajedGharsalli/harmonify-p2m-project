import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Separator = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 15 }}>
            <View style={{ borderTopWidth: 1, marginTop: 10, width: 100, borderColor: '#b2b3b3' }} />
            <Text >Or Login with</Text>
            <View style={{ borderTopWidth: 1, marginTop: 10, width: 100, borderColor: '#b2b3b3' }} />
        </View>
    )
}

export default Separator

const styles = StyleSheet.create({})