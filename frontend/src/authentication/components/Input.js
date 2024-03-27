import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import eye from '../../../pics/eye.png'
import eye_closed from '../../../pics/eye-crossed.png'

export default function Input({ title, placeHolder, value, setValue, ispassword }) {
    const [isPasswordVisible, setPasswordVisible] = useState(true);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={setValue}
                    placeholder={placeHolder}
                    secureTextEntry={isPasswordVisible && ispassword}
                    placeholderTextColor="#999"
                />
                {ispassword && (
                    <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)} style={styles.eyeButton}>
                        <Image source={isPasswordVisible ? eye : eye_closed} style={styles.eyeImage} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5,
        color: '#333',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        height: 45,
        paddingHorizontal: 15,
        backgroundColor: '#f8f8f8',
    },
    input: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
        color: '#333',
    },
    eyeButton: {
        padding: 10,
    },
    eyeImage: {
        width: 24,
        height: 24,
        tintColor: '#666',
    },
})
