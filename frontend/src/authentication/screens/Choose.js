import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Picker from '../components/Picker';
import { ages, weights, heights } from '../Data';


export default function Choose({ items, setItems }) {
  const data = [
    { text: 'Select your age', data: ages, item: items.age, setItem: setItems.setAge, icon: 'calendar-days' },
    { text: 'Select your weight', data: weights, item: items.weight, setItem: setItems.setWeight, icon: 'weight-scale' },
    { text: 'Select your height', data: heights, item: items.height, setItem: setItems.setHeight, icon: 'ruler-vertical' }
  ]

  return (
    <View >
      {data.map((item) => {
        return (
          <View style={styles.container}>
            <Text style={styles.title}>{item.text}</Text>
            <Picker data={item.data} selectedItem={item.item} setSelectedItem={item.setItem} icon={item.icon} />
          </View>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  title: {
    fontSize: 20,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10
  },
});
