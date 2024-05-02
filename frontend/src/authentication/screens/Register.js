import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';
import Have from '../components/Have';
import Separator from '../components/Separator';
import IconButton from '../components/IconButton';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import facebook from '../../../pics/facebook.png';
import google from '../../../pics/google.png';
import CustomModal from '../../modals/CustomModal';

export default function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const navigation = useNavigation();

  const handleRegister = () => {
    const userData = {
      name: name,
      email: email,
      password: password,
    };
    axios.post('http://192.168.43.81:3000/user/register', userData)
      .then((res) => {
        const { message } = res.data;
        console.log(message)
        if (message==="Registration successful"){
          axios.post('http://192.168.43.81:3000/otp/',{email: email}).then((res)=>{
          console.log("email sent")
          }).catch(err=>console.log(err))
        }
        setModalMessage(message);
        setModalVisible(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const closeModal = () => {
    setModalVisible(false);
    if (modalMessage === "Registration successful") {
      navigation.navigate('OTP',{email})
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Sign up to continue</Text>
      </View>
      <View style={styles.formContainer}>
        <Input
          title={'Name'}
          value={name}
          setValue={setName}
          placeHolder={'Enter your name'}
        />
        <Input
          title={'Email address'}
          value={email}
          setValue={setEmail}
          placeHolder={'Enter your Email address'}
        />
        <Input
          title={'Password'}
          value={password}
          setValue={setPassword}
          placeHolder={'Enter your password'}
          ispassword={true}
        />
        <CustomButton title={'Sign Up'} onPress={() => handleRegister()} />
        <Have />
        <Separator />
        <View style={styles.iconContainer}>
          <IconButton img={facebook} text={'Facebook'} color={'#1877F2'} />
          <IconButton img={google} text={'Google'} color={'#e53e30'} />
        </View>
      </View>
      <CustomModal
        visible={modalVisible}
        onClose={closeModal}
        message={modalMessage}
      />
    </SafeAreaView>
  );
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