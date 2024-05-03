import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo


export default function BottomTabs() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const tabs = [
    { title: 'Home', iconName: 'home-outline' },
    { title: 'Profile', iconName: 'person-outline' },
    { title: 'Settings', iconName: 'settings-outline' }
  ];

  const renderTab = (tab, index) => (
    <TouchableOpacity
      key={tab.title}
      style={[styles.tab, { backgroundColor: index === selectedIndex ? '#FF6F61' : '#FFF', shadowOpacity: index === selectedIndex ? 0.2 : 0 }]}
      onPress={() => setSelectedIndex(index)}
    >
      <Ionicons name={tab.iconName} size={28} color={index === selectedIndex ? '#FFF' : '#000'} />
      <Text style={[styles.tabText, { color: index === selectedIndex ? '#FFF' : '#000' }]}>{tab.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.bottomTab}>
        {tabs.map((tab, index) => renderTab(tab, index))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.2,
    elevation: 5,
  },
  tab: {
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  tabText: {
    marginTop: 4,
    fontSize: 14,
  },
});
