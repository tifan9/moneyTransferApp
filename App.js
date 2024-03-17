
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { View, Text } from 'react-native'
import React from 'react'
import { Sendmoney } from './src/screens/Sendmoney'
import { Newrecipient } from './src/screens/Addnewcard'
import Addnewcard  from './src/screens/Addnewcard'

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { BottomNav, Navigation } from './src/components/Navigation';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Navigation  />
        {/* <BottomNav  /> */}
      </NavigationContainer>
      <StatusBar style="light"/>
      {/* <Splash  /> */}
      {/* <GetStarted  /> */}
      {/* <Welcome  /> */}
    {/* <Sendmoney /> */}
    {/* <Addnewcard /> */}
</>
  )
}
