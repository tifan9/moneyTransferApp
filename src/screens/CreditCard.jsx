import React from 'react';
import { View, Text,Dimensions, TouchableOpacity, ScrollView, SafeAreaView, Image, Pressable } from 'react-native';
import tw from 'twrnc';
import Feather from  'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { InputText } from '../components/InputText';
const windowedHeight = Dimensions.get('screen').height
const width = Dimensions.get('screen')
export const CreditCard = ({navigation}) => {
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
      <View style={[tw `flex flex-row justify-between p-10 mt-10 m-5 gap-2 border rounded-xl  bg-[#202325]`]}>
        <View style={[tw `justify-between`]}>
            <Text style={[tw `text-white text-xl`]}>Current Balance</Text>
            <Text style={[tw `text-white text-2xl`]}>$4,570.80</Text>
            <View style={{height:30}}></View>
            <View style={[tw ``]}>
            <Text style={[tw `text-white text-xl`]}>4001-2212-1234-1234</Text>
            </View>
        </View>

        <View style={[tw `items-end`]}>
        <Image  
          source={require('../../assets/img/mastercard.png')}
          style={[tw ``, {height:50, width:50}]}
          resizeMode="cover"  
      />
      <View style={{height:30}}></View>
      <Text style={[tw `text-white text-xl`]}>12/24</Text>
        </View>
        
      </View>
      </ScrollView>
      </View>
      
    </>
  );
}
