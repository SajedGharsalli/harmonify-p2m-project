import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Activity from '../Components/Activity';
import IBW from '../Components/IBW';
import StepCounter from '../Components/StepCounter';

export default function HealthRecords() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Activity />
        <IBW />
        <StepCounter />
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical :40
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop : 20,
    paddingBottom: 50,
  },
});