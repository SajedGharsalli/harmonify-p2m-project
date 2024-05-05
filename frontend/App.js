import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Index from './src/Index';
import BottomTabs from './src/Home/Components/BottomTabs';
import Activity from './src/Home/Components/Activity';
import HealthRecords from './src/Home/Screens/HealthRecords';
import StepCounter from './src/Home/Components/StepCounter';
import Home from './src/Home/Screens/Water';
import WaterReminder from './src/Home/Components/WaterReminder';
import Water from './src/Home/Screens/Water';


export default function App() {
  return (
    <View style={styles.container}>
      <Water/>
      <StatusBar style='dark' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
