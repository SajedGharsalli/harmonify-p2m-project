import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#666699',
    paddingVertical: 15,
    borderRadius: 5,
    paddingHorizontal : 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight : 'bold'
  },
});
