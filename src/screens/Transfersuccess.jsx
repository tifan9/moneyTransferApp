import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { FlatList, Image, ImageBackground, Pressable, StyleSheet, Text, View,  TouchableOpacity,Dimensions } from 'react-native';
import { InputText } from '../components/InputText';


const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

export const Success=({navigation})=> {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/img/success.jpg')} style={{top:96,marginHorizontal:160,position:'absolute',zIndex:5}}/>
      <View style={{backgroundColor:'#202325', top:130, width:320, height:450, marginHorizontal:30, borderRadius:20,position:'relative'}}>
    
        <Text style={{color:'white', fontSize:17, top:40,paddingHorizontal:80}}>Transfer Successful</Text>
        <View style={{ position: 'absolute', left: 20, }}>
          <InputText label={'Receipt'} mode={'flat'}/>
        </View>

        <View style={{ position: 'absolute', top: 70, left: 20 }}>
          <InputText label={'Destination country'}  mode={'flat'} />
        </View>

        <View style={{ position: 'absolute', top: 130, left: 20 }}>
          <InputText label={'Amount'}  mode={'flat'} />
        </View>

        <View style={{ position: 'absolute', top: 340, }}>
        <TouchableOpacity style={{ backgroundColor: '#313436', width: 280,bottom:10, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginHorizontal: 20 }}>
            <Text style={{ color: '#FCD357', fontWeight: 'bold' }}>Download Receipt</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#FCD357', width: 280, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginHorizontal: 20 }}>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>Make a New Transfer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#121214',
    height: height,
    width: width
  },
});
