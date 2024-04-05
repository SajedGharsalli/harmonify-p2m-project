import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Picker from '../components/Picker';
import { ages, weights, heights } from '../Data';
import Button from '../components/Button'

export default function Choose() {
  const [age, setAge] = useState(null);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your age</Text>
      <Picker data={ages} selectedItem={age} setSelectedItem={setAge} />
      <Text style={styles.title}>Choose your weight</Text>
      <Picker data={weights} selectedItem={weight} setSelectedItem={setWeight} />
      <Text style={styles.title}>Choose your height</Text>
      <Picker data={heights} selectedItem={height} setSelectedItem={setHeight} />
      <View style={{ position: 'absolute', alignSelf: 'center', bottom: 100 }}>
        {age && weight && height && <Button title={'next'}/>}
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
