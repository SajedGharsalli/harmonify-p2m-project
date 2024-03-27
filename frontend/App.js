import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react';
import Onboarding from './src/onboarding/screens/Onboarding';
import Login from './src/authentication/screens/Login';
import Register from './src/authentication/screens/Register';


const Loading = () => {
  <View>
    <ActivityIndicator size={'large'} />
  </View>
}

const checkOnBoarding = async (setLoading, setViewedOnboarding) => {
  try {
    const value = await AsyncStorage.getItem('@viewedOnboarding')
    if (value !== null) {
      setViewedOnboarding(true)
    }
  } catch {
    console.log(err)
  } finally {
    setLoading(false)
  }
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [viewedOnboarding, setViewedOnboarding] = useState(false)
  useEffect(() => {
    checkOnBoarding(setLoading, setViewedOnboarding);
  }, [])
  return (
    <View style={styles.container}>
      {/* {loading ? <Loading /> : viewedOnboarding ? <Login /> : <Onboarding />} */}
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
