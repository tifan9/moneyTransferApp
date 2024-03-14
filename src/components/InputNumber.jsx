import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const InputNumber= ({TextTitle, label, value,placeholder, error, onChangeText, keyboardType,iconNameLeft,iconSize,iconColor, iconStyle}) => {
  return (
    <View style={styles.container}> 
    <View >
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
      placeholderTextColor='white'
      textColor='white'
      onChangeText={onChangeText}
      style={styles.textinput}
      keyboardType={keyboardType}
      left={<TextInput.Icon 
        icon={iconNameLeft}
        size={iconSize}
        color={iconColor}
        style={iconStyle}
        />}
  
    />
    </View>
  )
}
export {InputNumber}
// the styling of the textinput component

const styles=StyleSheet.create({
  container:{
    paddingHorizontal:20,
    paddingVertical:2
  },
  textinput:{
    borderRadius:10,
    underlineColor:'transparent',
    opacity:0.5,
    height:43,
    borderColor:'#41464A'
    
  },
  
  texttitle:{
    opacity:0.6,
    color:'#F7F9FA',
    fontSize:14
  },


})
  
