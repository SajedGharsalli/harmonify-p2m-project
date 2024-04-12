import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Picker from '../components/Picker';
import { ages, weights, heights } from '../Data';
import Button from '../components/Button'

import {useRoute,useNavigation} from '@react-navigation/native'

import axios from 'axios'


export default function Choose() {
  const [age, setAge] = useState(null);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [mes, Setmess] = useState('')


  const route = useRoute()
  const navigation = useNavigation()

  const {email,selectedGender} = route.params

  const handleNext =()=>{
    const userData={
      email : email,
      age : age,
      weight : weight,
      height : height,
    }
    axios.put('http://192.168.1.4:3000/user/choose',userData).then((res) => {
      console.log(res.data)
      Setmess("register successful")
  }).catch((err)=>{console.log(err)})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your age</Text>
      <Picker data={ages} selectedItem={age} setSelectedItem={setAge} />
      <Text style={styles.title}>Choose your weight</Text>
      <Picker data={weights} selectedItem={weight} setSelectedItem={setWeight} />
      <Text style={styles.title}>Choose your height</Text>
      <Picker data={heights} selectedItem={height} setSelectedItem={setHeight} />
      <View >
        {age && weight && height && <Button title={'next'} onPress={()=>handleNext()}/>}
        <Text>{mes}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop : 10
  },
});
