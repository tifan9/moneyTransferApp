import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Landing } from '../screens/Landing';
import { Help } from '../screens/Help';
import { Profile } from '../screens/Profile';
import Feather from 'react-native-vector-icons/Feather'
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
export const Navigation = () => {
  return (
    <>
    </>
  )
}
export const BottomNav = () => {
    return (
      <Tab.Navigator
      screenOptions={{tabBarStyle:{backgroundColor: '#1F2123', borderTopColor: '#1F2123',}}}
      >
        <Tab.Screen name="Home" component={Landing} options={{headerShown: false, tabBarShowLabel:false, tabBarIcon:({focused})=> <Feather name='home' size={30} color={focused? '#D9BE52':'gray'}/>  }}/>
        <Tab.Screen name="Help" component={Help} options={{headerShown: false, tabBarShowLabel:false, tabBarIcon:({focused})=> <Feather name='help-circle' size={30} color={focused? '#D9BE52':'gray'}/>  }} />
        <Tab.Screen name="Profile" component={Profile} options={{headerShown: false, tabBarShowLabel:false, tabBarIcon:({focused})=> <Feather name='menu' size={30} color={focused? '#D9BE52':'gray'}/>  }} />
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    )
  }

