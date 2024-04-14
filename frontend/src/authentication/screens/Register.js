import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Platform, 
    KeyboardAvoidingView, 
    ScrollView 
} from 'react-native';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';
import Have from '../components/Have';
import Separator from '../components/Separator';
import IconButton from '../components/IconButton';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import facebook from '../../../pics/facebook.png';
import google from '../../../pics/google.png';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    
    const navigation = useNavigation();
    
    const handleRegister = async () => {
        if (!name || !email || !phone || !password) {
            alert("Please fill out all the required fields.");
            return;
        }
        
        const userData = {
            name,
            email,
            phone,
            password,
        };
        
        try {
            const response = await axios.post('http://192.168.1.4:3000/user/register', userData);
            console.log(response.data);
            navigation.navigate('Continue', { email });
        } catch (error) {
            console.error(error);
            alert("An error occurred during registration. Please try again.");
        }
    };

    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false} >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Create Account</Text>
                    <Text style={styles.subtitle}>Sign up to continue</Text>
                </View>
                
                <View style={styles.formContainer}>
                    <Input
                        title={'Name'}
                        value={name}
                        setValue={setName}
                        placeholder={'Enter your name'}
                    />
                    <Input
                        title={'Email address'}
                        value={email}
                        setValue={setEmail}
                        placeholder={'Enter your email address'}
                    />
                    <Input 
                        title={'Phone number'}
                        value={phone}
                        setValue={setPhone}
                        placeholder={'Enter your phone number'}
                    />
                    <Input
                        title={'Password'}
                        value={password}
                        setValue={setPassword}
                        placeholder={'Enter your password'}
                        secureTextEntry={true}
                    />
                    
                    <CustomButton title={'Sign Up'} onPress={handleRegister} />
                    
                    <Have />
                    <Separator />
                    
                    <View style={styles.iconContainer}>
                        <IconButton img={facebook} text={'Facebook'} color={'#1877F2'} />
                        <IconButton img={google} text={'Google'} color={'#e53e30'} />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    titleContainer: {
        marginBottom: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: '500',
        marginBottom: 5,
    },
    subtitle: {
        color: 'gray',
        fontSize: 16,
    },
    formContainer: {
        width: '100%',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20,
    },
});

export default Register;
