import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';

export default function Picker({ data, selectedItem, setSelectedItem }) {

  const renderItem = ({ item }) => {
    const isSelected = selectedItem === item;
    return (
      <Pressable
        style={[styles.item, { borderRadius: 20, backgroundColor: isSelected ? 'gray' : 'white' }]}
        onPress={() => {
          setSelectedItem((prevSelectedItem) =>
            prevSelectedItem === item ? null : item
          );
        }}
      >
        <Text style={{ fontSize: 24, color: isSelected ? 'white' : 'black', textAlign: 'center' }}>{item}</Text>
      </Pressable>
    );
  };

  return (
    <View>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexGrow: 0,
    borderColor: '#ccc',
    borderRadius: 20,
  },
  item: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  }
});
