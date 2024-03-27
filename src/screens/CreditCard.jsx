import React, { useState } from 'react';
import { View, Text,Dimensions, TouchableOpacity, ScrollView, SafeAreaView, Image, Pressable } from 'react-native';
import tw from 'twrnc';
import Feather from  'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { InputText } from '../components/InputText';
import { ButtonComp } from '../components/ButtonComp';
const windowedHeight = Dimensions.get('screen').height
const width = Dimensions.get('screen')
export const CreditCard = ({navigation, route}) => {
  const {updatedAmount } = route.params || {};
  // console.log("Amount in CreditCard screen:", amount);
    console.log("Updated amount in CreditCard screen:", updatedAmount);
  return (
    <>
      <View style={[tw `bg-[#121214]`, {height:windowedHeight}]}> 
      <View style={[tw `border-b border-gray-500 bg-[#202325] pt-8 `, {height:120} ]}>
          <View style={[tw `flex flex-row items-center justify-between p-5 pt-10`]}>
          <View>
                <Text style={[tw `text-white font-bold text-2xl`]}>My Card</Text>
                </View>
          </View>
      </View>
      <ScrollView>
        {/* Card */}
      <View style={[tw `flex flex-row items-center justify-between p-10 mt-10 m-5 gap-2 border rounded-xl  bg-[#202325]`]}>
        <View style={[tw `justify-between`]}>
            <Text style={[tw `text-white text-xl`]}>Current Balance</Text>
            <Text style={[tw `text-white text-2xl`]}>{`$${updatedAmount}`}</Text>
            <View style={{height:30}}></View>
            <View style={[tw ``]}>
            <Text style={[tw `text-white text-xl`]}>000-22</Text>
            </View>
        </View>

        <View style={[tw `items-end`]}>
        <Image  
          source={require('../../assets/img/mastercard.png')}
          style={[tw ``, {height:50, width:50}]}
          resizeMode="cover"  
      />
      <View style={{height:30}}></View>
      <Text style={[tw `text-white text-xl pt-1`]}>12/24</Text>
        </View>
      </View>
      <ButtonComp text1='Recharge' onPress={() => navigation.navigate('AddMoney')}/>
      <ButtonComp text1='Add New Card' onPress={() => navigation.navigate('NewCard')}/>

        </ScrollView>
      </View>
      
    </>
  );
}
