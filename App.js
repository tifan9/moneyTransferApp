
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import LoginIn from './src/screens/Login';
import Register from './src/screens/Register';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


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
      {/* <NavigationContainer>
       <Stack.Navigator initialRouteName='Login'>
         <Stack.Screen name="Login" component={LoginIn} options={{headerShown:false}} />
       <Stack.Screen name="Register" component={Register}  options={{headerShown:false}}/>
       </Stack.Navigator>
     </NavigationContainer> */}
    </>
  );

  
}

