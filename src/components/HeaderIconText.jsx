import React from 'react';
import { View, Text,StyleSheet, Pressable} from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

export default function HeaderIconText({text, onPress}) {
  return (
  <View>
    <View style={styles.wholeContainer}>
    <Pressable > 
        <AntDesign name="arrowleft" size={28} color="#EE9B12"  onPress={onPress}/>
    </Pressable>
    <Text style={styles.text}> {text}</Text>
   </View>
  </View>
  )
}

//  the styling part of this screen 

const styles=StyleSheet.create({
    wholeContainer:{
        backgroundColor:'#212324', 
        paddingTop:40,
        paddingBottom:20,
        paddingHorizontal:20,
        display:'flex',
        alignItems:'space-between',
        justifyContent:'left',
        gap:15, 
        flexDirection:'row'
        

    }, 
    text:{
        color:'#F7F9FA',
        fontSize:22,
        paddingTop:20

    }
})