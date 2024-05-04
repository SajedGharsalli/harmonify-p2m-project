import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Index from './src/Index';
import BottomTabs from './src/Home/Components/BottomTabs';
import Activity from './src/Home/Components/Activity';
import Home from './src/Home/Screens/Home';
import StepCounter from './src/Home/Components/StepCounter';


export default function App() {
  return (
    <View style={styles.container}>
      <StepCounter />
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
