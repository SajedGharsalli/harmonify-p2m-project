import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './onboarding/screens/Onboarding';
import Register from './authentication/screens/Register';
import Login from './authentication/screens/Login';
import Continue from './authentication/screens/Continue';

const Stack = createNativeStackNavigator()

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Onboarding' component={Onboarding} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Continue' component={Continue} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}