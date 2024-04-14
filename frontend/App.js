import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Index from './src/Index';
import OtpVerif from './src/verification/screens/OtpVerif';


export default function App() {
  return (
    <View style={styles.container}>
      <OtpVerif />
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
