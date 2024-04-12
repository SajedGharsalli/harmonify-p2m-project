import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import man from '../../../pics/man.png';
import woman from '../../../pics/woman.png';
import Button from '../components/Button';

import axios from 'axios'

import {useRoute,useNavigation} from '@react-navigation/native'

export default function GenderPicker() {
  const [selectedGender, setSelectedGender] = useState(null);

  const handlePress = (gender) => {
    setSelectedGender(selectedGender === gender ? null : gender);
  };

  const route = useRoute()
  const navigation = useNavigation()

  const {email} = route.params

  const handleNext =()=>{
    const userData={
      email : email,
      sex : selectedGender
    }
    axios.put('http://192.168.1.4:3000/user/gender',userData).then((res) => {
      console.log(res.data)
  }).catch((err)=>console.log(err))
    navigation.navigate('Choose',{email,selectedGender})
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={styles.promptText}>Tell us about your gender</Text>
      <View style={styles.container}>
        <Pressable
          style={[styles.imageContainer, selectedGender === 'man' && { backgroundColor: '#cce6ff' }]}
          onPress={() => handlePress('man')}>
          <Image source={man} style={styles.image} />
          <Text style={styles.text}>Man</Text>
        </Pressable>
        <Pressable
          style={[styles.imageContainer, selectedGender === 'woman' && { backgroundColor: '#ffccff' }]}
          onPress={() => handlePress('woman')}>
          <Image source={woman} style={styles.image} />
          <Text style={styles.text}>Woman</Text>
        </Pressable>
      </View>
      <View style={{ position: 'absolute', alignSelf: 'center', bottom: 180 }}>
        {selectedGender && <Button title={'Next'} onPress={()=>handleNext()}/>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  promptText: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 50,
  },
  imageContainer: {
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    height: 155,
  },
  image: {
    width: 140,
    height: 140,
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
