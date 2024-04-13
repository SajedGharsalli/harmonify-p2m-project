import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import man from '../../../pics/man.png';
import woman from '../../../pics/woman.png';

export default function GenderPicker({ Gender, setGender }) {

  const handlePress = (gender) => {
    setGender(Gender === gender ? null : gender);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={styles.promptText}>Tell us about your gender</Text>
      <View style={styles.container}>
        <Pressable
          style={[styles.imageContainer, Gender === 'man' && { backgroundColor: '#cce6ff' }]}
          onPress={() => handlePress('man')}>
          <Image source={man} style={styles.image} />
          <Text style={styles.text}>Man</Text>
        </Pressable>
        <Pressable
          style={[styles.imageContainer, Gender === 'woman' && { backgroundColor: '#ffccff' }]}
          onPress={() => handlePress('woman')}>
          <Image source={woman} style={styles.image} />
          <Text style={styles.text}>Woman</Text>
        </Pressable>
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
    paddingHorizontal: 50,
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
