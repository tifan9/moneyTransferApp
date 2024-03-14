import { View, Text, Pressable, SectionList } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { TextInput } from 'react-native-paper';

export default function Newcard({Tittle}) {
  return (
    <View>
      <View style={{margin:10}} >
        <Text style={{color:'white',margin:5}} > {Tittle} </Text>
        <TextInput style={{backgroundColor:'#1a1a1a',borderColor:'white',borderWidth:1}} mode='outlined'  />
        <Text style={{color:'white',margin:5}}>Transfers are possible only to cards of United state banks.The issuing bank may change additional fees for depositing the funds to the card. please, contact your bank for more information about applicable fees. </Text>
        {/* <View>
          <image source={require('')}/>
        </View> */}
      </View>
    </View>
  )
}