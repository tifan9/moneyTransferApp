import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { FlatList, Image, ImageBackground, Pressable, StyleSheet, Text, View,  TouchableOpacity,Dimensions } from 'react-native';



const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;


export default function Splash({navigation}) {
 
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={()=> navigation.navigate('Welcome')}>
      <View style={{flex:1,display:'flex', paddingTop:330,alignItems:'center', justifycontent:'center', paddingHorizontal:150}}>
      <ImageBackground source={require('../../assets/img/splash.png')} style={{width:100,height:100}}/>
      </View>
    </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
  backgroundColor:'#121214',
  height:height,
  width:width
  },
});
