import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Index from './src/Index';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  return (
    <View style={styles.container}>
      <Index/>
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
