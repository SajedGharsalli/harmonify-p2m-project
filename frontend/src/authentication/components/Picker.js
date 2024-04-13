import React from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

export default function Picker({ data, selectedItem, setSelectedItem, icon }) {

  const renderItem = ({ item }) => {
    const isSelected = selectedItem === item;
    return (
      <View >
        <Pressable
          style={[styles.item, { borderRadius: 20, backgroundColor: isSelected ? 'gray' : 'white' }]}
          onPress={() => {
            setSelectedItem((prevSelectedItem) =>
              prevSelectedItem === item ? null : item
            );
          }}>
          <Text style={{ fontSize: 24, color: isSelected ? 'white' : 'black', textAlign: 'center' }}>{item}</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.container}>
        <Icon name={icon} size={24} style={{ marginRight: 10 }} />
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          scrollEventThrottle={32}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderColor: '#ccc',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: "center",
  },
  item: {
    width: 100,
    height: 50,
    justifyContent: 'center',
  }
});
