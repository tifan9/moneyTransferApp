// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Splash';

import Welcome from './Slides';
import GetStarted from './Getstart';


 // Import your GetStarted component here

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
        <Stack.Screen name="start" component={GetStarted} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
