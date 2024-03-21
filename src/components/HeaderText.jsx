import React from 'react';
import { View, Text,StyleSheet} from 'react-native';

export default function HeaderText({text}) {
  return (
   <View style={styles.wholeContainer}>
    <Text style={styles.text}> {text}</Text>
   </View>
  )
}


//  the styling part of this screen 

const styles=StyleSheet.create({
    wholeContainer:{
        backgroundColor:'#212324', 
        paddingVertical:20,
        paddingHorizontal:20

    }, 
    text:{
        color:'#F7F9FA',
        fontSize:22,
        paddingTop:20

    }
})