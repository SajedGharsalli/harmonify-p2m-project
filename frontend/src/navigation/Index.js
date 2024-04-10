import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import Onboarding from '../onboarding/screens/Onboarding';
import Register from '../authentication/screens/Register';
import Choose from '../authentication/screens/Choose';
import GenderPicker from '../authentication/screens/GenderPicker';
import Login from '../authentication/screens/Login';

const Stack = createNativeStackNavigator()

export default function Index() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown : false}} >
            <Stack.Screen name='Onboarding' component={Onboarding}/>
            <Stack.Screen name='Register' component={Register}/>
            <Stack.Screen name='Choose' component={Choose}/>
            <Stack.Screen name='GenderPicker' component={GenderPicker} />
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}