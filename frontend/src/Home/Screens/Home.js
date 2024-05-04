import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView
import Activity from '../Components/Activity';
import IBW from '../Components/IBW';
import BottomTabs from '../Components/BottomTabs';

export default function Home() {
  return (
    <GestureHandlerRootView>
        <ScrollView>
          <Activity />
          <IBW />
        </ScrollView>
        <BottomTabs />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
