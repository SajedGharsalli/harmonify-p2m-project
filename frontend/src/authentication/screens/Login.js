import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'
import Input from '../components/Input'
import CustomButton from '../components/CustomButton'
import DontHave from '../components/DontHave'
import Forget from '../components/Forget'
import Separator from '../components/Separator'
import IconButton from '../components/IconButton'

import axios from 'axios'

import facebook from '../../../pics/facebook.png'
import google from '../../../pics/google.png'

const { width, height } = Dimensions.get('window')

export default function Login() {
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const [isSelected, setSelection] = useState(false);
    const [mes, Setmess] = useState('')

    const handleLogin = () => {
        console.log({ email, password })
        const userData = {
            email: email,
            password: password
        }
        axios.post('http://192.168.1.7:3000/user/login', userData).then((res) => {
            console.log(res.data)
            Setmess('login successful')
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Hey, Welcome Back!</Text>
                <Text style={styles.subtitle}>Hello again, you have been missed.</Text>
            </View>
            <View style={styles.formContainer}>
                <Input
                    title={'Email'}
                    value={email}
                    setValue={setemail}
                    placeHolder={'Enter your email'}
                />
                <Input
                    title={'Password'}
                    value={password}
                    setValue={setPassword}
                    placeHolder={'Enter your password'}
                    ispassword={true}
                />
                <View style={styles.rememberMeContainer}>
                    <Checkbox
                        disabled={false}
                        value={isSelected}
                        onValueChange={(newValue) => setSelection(newValue)}
                        style={styles.checkbox}
                    />
                    <Text style={styles.rememberMeText}>Remember me</Text>
                </View>
                <CustomButton title={'Login'} onPress={() => handleLogin()} />
                <Text>{mes}</Text>
                <DontHave />
                <Forget />
                <Separator />
                <View style={styles.socialLoginContainer}>
                    <IconButton img={facebook} text={'Facebook'} color={'#1877F2'} />
                    <IconButton img={google} text={'Google'} color={'#e53e30'} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    titleContainer: {
        marginBottom: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        color: 'gray',
        fontSize: 16,
        textAlign: 'center',
    },
    formContainer: {
        width: '100%',
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    checkbox: {
        marginLeft: 20,
    },
    rememberMeText: {
        marginLeft: 10,
        fontSize: 16,
    },
    socialLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20,
    },
})
