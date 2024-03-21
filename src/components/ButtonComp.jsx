import React from 'react';
import { View, Text,StyleSheet, TouchableOpacity} from 'react-native';

const ButtonComp = ({onPress, text1}) => {
  return (
    <View style={styles.wholeContainer}>
      <TouchableOpacity onPress={onPress} style={styles.textContainer}>
        <Text style={styles.text}> {text1}</Text>
      </TouchableOpacity>
    </View>
  );
}

// the styling part of this component 

const styles=StyleSheet.create({

  wholeContainer:{
    paddingHorizontal:25,
    paddingTop:20
  },
  textContainer:{
    backgroundColor:'#FCA210',
    borderRadius:8,
    padding:5,
  },

  text:{
    fontWeight:100,
    fontSize:17,
    paddingVertical:10,
    textAlign:'center',
    color:'#121315',
  }
})

export {ButtonComp}