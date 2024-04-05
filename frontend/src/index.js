import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Onboarding from './onboarding/screens/Onboarding';
import Register from './authentication/screens/Register';
import Login from './authentication/screens/Login';
import GenderPicker from './authentication/screens/GenderPicker';
import Choose from './authentication/screens/Choose';



const Stack = createStackNavigator();

export default function Index() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='onboard' component={Onboarding}/>
            <Stack.Screen name='signup' component={Register} />
            <Stack.Screen name='gender' component={GenderPicker} />
            <Stack.Screen name='choose' component={Choose} />
            <Stack.Screen name='login' component={Login} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}