import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Activity from '../Components/Activity';
import IBW from '../Components/IBW';
import StepCounter from '../Components/StepCounter';
import BottomTabs from '../Components/BottomTabs';

export default function HealthRecords() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Activity />
        <IBW />
        <StepCounter />
      </ScrollView>
      <BottomTabs />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop : 20,
    paddingBottom: 50,
  },
});
