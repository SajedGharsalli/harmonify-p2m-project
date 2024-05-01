import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Index from './src/Index';
import OtpVerif from './src/verification/screens/OtpVerif';
import Login from './src/authentication/screens/Login';
import CustomModal from './src/modals/CustomModal';


export default function App() {
  return (
    <View style={styles.container}>
      <Index />
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
