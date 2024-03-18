import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { FlatList, Image, ImageBackground, Pressable, StyleSheet, Text, View,  TouchableOpacity,Dimensions } from 'react-native';



const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;


export default function Splash({navigation}) {
 
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={()=> navigation.navigate('Welcome')}>
    <ImageBackground source={require('../../assets/img/splash.png')} style={{width:100,height:100, flex:1, marginTop:330, justifycontent:'center', marginHorizontal:150}}/>
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
