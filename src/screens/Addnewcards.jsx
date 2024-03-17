import { View, Text, Pressable,StyleSheet, SectionList,Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { Button, TextInput } from 'react-native-paper';

export default function Newcard({Tittle}) {
  return (
    <View>
      <View style={{margin:10}} >
        <Text style={{color:'white',marginBottom:5,fontWeight:'500'}} > {Tittle} </Text>
        <TextInput  mode='outlined' style={{backgroundColor:'#1a1a1a',borderColor:'white',borderWidth:1}} >
        {/* <Image source={require('../../assets/img/master-card.png')} style={styles.image}/> */}
        </TextInput> 
        <Text style={{color:'white',fontSize:17,paddingTop:30}}>Transfers are possible only to cards of United state banks.The issuing bank may change additional fees for depositing the funds to the card. please, contact your bank for more information about applicable fees. </Text>
        <View style={{display:'flex', flexDirection:'row',flexWrap:'wrap',paddingTop:20}}>
          <Image source={require('../../assets/img/master-card.png')}/>
          <View>
          <Image source={require('../../assets/img/visa-card.png')}  style={{ marginLeft:10}}/>
          </View>
        </View>
      </View>
      <View>
        <Pressable>
        <Button style={{backgroundColor:'#f9be02',borderRadius:6,margin:10,padding:10}}> 
        <Text style={{color:'black',fontWeight:'500',fontSize:20,}} >Continue</Text> 
        </Button>
        </Pressable>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  image: {
    padding:20
   
  },
});