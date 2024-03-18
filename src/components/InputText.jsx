import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const InputText= ({TextTitle, label, value,placeholder, onChangeText,error, keyboardType}) => {
  return (
    <View style={styles.container}> 
    <View style={styles.textcontainer}>
    <Text style={styles.texttitle}>{TextTitle}</Text>
    </View>
    <TextInput
      mode='outlined'
      label={label}
      value={value}
      error={error}
      dense
      theme={{roundness:8, colors:{primary:'#333336', background:'transparent'}, borderColor:'#333336', underlineColor:'#333336'}}
      placeholder={placeholder}
      placeholderTextColor='#8F9294'
      textColor='white'
      onChangeText={onChangeText}
      style={styles.textinput}
      keyboardType={keyboardType}
    
    />
    </View>
  )
}
export {InputText}
// the styling of the textinput component

const styles=StyleSheet.create({
  container:{
    paddingHorizontal:20,
    paddingVertical:5
  },
  textinput:{
    borderRadius:10,
    underlineColor:'transparent',
    opacity:0.5,
    height:43,
    borderColor:'#41464A'
    
  },
  textcontainer:{
    paddingBottom:4,
    
  },
  texttitle:{
    opacity:0.6,
    color:'#F7F9FA',
    fontSize:14
  },


})
  


export {TextInput}
