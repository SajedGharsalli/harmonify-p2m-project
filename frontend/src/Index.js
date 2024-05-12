import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Onboarding from './onboarding/screens/Onboarding';
import Register from './authentication/screens/Register';
import Login from './authentication/screens/Login';
import Continue from './authentication/screens/Continue';
import OtpVerif from './verification/screens/OtpVerif';
import HealthRecords from './Home/Screens/HealthRecords';
import WaterReminder from './Home/Components/WaterReminder';
import CameraComponent from './Home/Screens/Camera';
import { Text, View } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 0, 
    elevation: 8,
    borderTopWidth :1,
  },
};

const tabs = [
  { name: 'Record', component: HealthRecords, iconName: 'heart-pulse', title: 'Health Records' },
  { name: 'Water', component: WaterReminder, iconName: 'bottle-water', title: 'Water Reminder' },
  { name: 'Emotions', component: CameraComponent, iconName: 'face-smile-beam', title: 'Emotions' }
];

const TabIcon = ({ focused, iconName, title }) => (
  <View style={{ alignItems: "center", justifyContent: "center" }}>
    <FontAwesome6 name={iconName} size={32} color={focused ? '#4080bf' : '#4d4d4d'} />
    <Text style={{ fontSize: 14, color: focused ? '#4080bf' : '#4d4d4d' }}>{title}</Text>
  </View>
);

export default function Index() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Onboarding' component={Onboarding} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Continue' component={Continue} />
        <Stack.Screen name='OTP' component={OtpVerif} />
      </Stack.Navigator> */}
      <Tab.Navigator screenOptions={screenOptions}>
      {tabs.map(tab => (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabIcon focused={focused} iconName={tab.iconName} title={tab.title} />
              )
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}


