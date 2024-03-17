import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Landing } from '../screens/Landing';
import { Help } from '../screens/Help';
import { Profile } from '../screens/Profile';
import Feather from 'react-native-vector-icons/Feather'
import { NavigationContainer } from '@react-navigation/native';
import { CreditCard } from '../screens/CreditCard';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { History } from '../screens/History';
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
export const Navigation = () => {
  return (
    <>
    <Stack.Navigator>
      {/* <Stack.Screen name='credit' component={CreditCard} option={{headerShown:false}}  /> */}
      <Stack.Screen name='HomeScreen' component={BottomNav}  options={{ headerShown: false }}/>
      <Stack.Screen name='history' component={History}  options={{ headerShown: false }}/>
      
    </Stack.Navigator>
    </>
  )
}
export const BottomNav = () => {
    return (
      <Tab.Navigator
      screenOptions={{tabBarStyle:{backgroundColor: '#1F2123', borderTopColor: '#1F2123',}}}
      >
        <Tab.Screen name="Home" component={Landing} options={{headerShown: false, tabBarShowLabel:false, tabBarIcon:({focused})=> <Feather name='home' size={30} color={focused? '#D9BE52':'gray'}/>  }}/>
        <Tab.Screen name="CreditCard" component={CreditCard} options={{headerShown: false, tabBarShowLabel:false, tabBarIcon:({focused})=> <Feather name='pocket' size={30} color={focused? '#D9BE52':'gray'}/>  }} />
        <Tab.Screen name="Help" component={Help} options={{headerShown: false, tabBarShowLabel:false, tabBarIcon:({focused})=> <Feather name='help-circle' size={30} color={focused? '#D9BE52':'gray'}/>  }} />
        <Tab.Screen name="Profile" component={Profile} options={{headerShown: false, tabBarShowLabel:false, tabBarIcon:({focused})=> <Feather name='menu' size={30} color={focused? '#D9BE52':'gray'}/>  }} />
        
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    )
  }

