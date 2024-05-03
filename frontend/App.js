import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Index from './src/Index';
import BottomTabs from './src/Home/Screens/BottomTabs';


export default function App() {
  return (
    <View style={styles.container}>
      <BottomTabs />
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
