import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTabs from '../Components/BottomTabs';
import WaterReminder from '../Components/WaterReminder';

export default function Water() {
  return (
    <View style={styles.container}>
        <WaterReminder/>
        <BottomTabs />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
})