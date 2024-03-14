import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Splash from './src/screens/Splash';
import GetStarted from './src/screens/GetStarted';
import Welcome from './src/screens/Slides';

export default function App() {
  return (
    <>
      {/* <Splash  /> */}
      {/* <GetStarted  /> */}
      <Welcome  />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
