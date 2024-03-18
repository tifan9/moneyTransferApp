
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import LoginIn from './src/screens/Login';
import Register from './src/screens/Register';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { BottomNav, Navigation } from './src/components/Navigation';
<<<<<<< HEAD
import DropdownInput from './src/screens/DropdownInput';
=======

>>>>>>> 7b3ca5b5df0bb9007fd23fe70e1000969513e525
const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <>
    <DropdownInput  />
      {/* <NavigationContainer>
        <Navigation  />
      </NavigationContainer> */}
      <StatusBar style="light"/>
    </>
  );

  
}

