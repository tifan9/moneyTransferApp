import { View, Text } from 'react-native'
import React from 'react'
import { Sendmoney } from './src/screens/Sendmoney'
import { Newrecipient } from './src/screens/Addnewcard'
import Addnewcard  from './src/screens/Addnewcard'

import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet} from 'react-native';
import LoginIn from './src/screens/Login';
import Register from './src/screens/Register';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { BottomNav, Navigation } from './src/components/Navigation';
import { UserAuthContextProvider } from './src/context/UserAuthContext'

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <>
    {/* <GestureHandlerRootView> */}
    <UserAuthContextProvider>
    <NavigationContainer>
        <Navigation  />
        {/* <BottomNav  /> */}
      </NavigationContainer>
    </UserAuthContextProvider>
      
      <StatusBar style="light"/>
      {/* </GestureHandlerRootView> */}
    </>
  );

  
}

