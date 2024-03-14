import React from 'react';
import { View, Text,Dimensions, TouchableOpacity, ScrollView, SafeAreaView, Image, Pressable } from 'react-native';
import tw from 'twrnc';
import Feather from  'react-native-vector-icons/Feather'
import { Transfer } from '../components/Transfer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const windowedHeight = Dimensions.get('screen').height
const width = Dimensions.get('screen')
const Help= () => {
  return (
    <>
    <View style={[tw `bg-[#121214]`, {height:windowedHeight}]}>
      <View style={[tw `border-b border-gray-500 bg-[#202325] pt-8 `, {height:120} ]}>
          <View style={[tw `flex flex-row items-center justify-between p-5 pt-10`]}>
          <View>
                <Text style={[tw `text-white font-bold text-2xl`]}>Help</Text>
                </View>
          </View>
      </View>
      {/* Card */}
      <View style={[tw `flex flex-row p-5 mt-10 m-5 gap-2 border rounded-xl  bg-[#202325]`]}>
        <Image  
          source={require('../../assets/img/msg.png')}
          style={[tw ``, {height:50, width:50}]}
          resizeMode="cover"  
      />
      <View style={[tw `flex flex-col flex-1 ml-3`]}>
    <Text style={[tw `text-white font-bold text-xl`]}>Frequently asked questions</Text>
    <Text style={[tw `text-gray-500 text-sm mt-2`]}>We do not charge fees for transfers with currency conversion. For example, if you are sending in USD but paying for it in EUR.</Text>
    <TouchableOpacity style={[tw `flex flex-row items-center mt-2`]}>
      <Text style={[tw `text-yellow-500`]}>Find answers</Text>
      <Feather  
        name='arrow-right'
        size={18}
        color='#FCA311'
      />
    </TouchableOpacity>
  </View>
      </View>

        {/* icons */}
        <TouchableOpacity>
        <View style={[tw `flex flex-row justify-between items-center p-5 `, {}]}>
          <View style={[tw `flex flex-row gap-3`, {}]}>
            <Feather  
              name="message-circle"
              color='gray'
              size={25}
            />
            <Text style={[tw `text-white`, {fontSize:18}]}>Send a message to our whatsapp</Text>
          </View>
          <MaterialCommunityIcons  
            name='greater-than'
            color='#FCA311'
            size={20}
          />
        </View>
        </TouchableOpacity>
        {/* Icons */}
        <TouchableOpacity>
        <View style={[tw `flex flex-row justify-between items-center p-5 `, {}]}>
          <View style={[tw `flex flex-row gap-3`, {}]}>
            <Feather  
              name="mail"
              color='gray'
              size={25}
            />
            <Text style={[tw `text-white`, {fontSize:18}]}>Send an email</Text>
          </View>
          <MaterialCommunityIcons  
            name='greater-than'
            color='#FCA311'
            size={20}
          />
        </View>
        </TouchableOpacity>
        {/* Icons */}
        <TouchableOpacity>
        <View style={[tw `flex flex-row justify-between items-center p-5 `, {}]}>
          <View style={[tw `flex flex-row gap-3`, {}]}>
            <Feather  
              name="phone"
              color='gray'
              size={25}
            />
            <Text style={[tw `text-white`, {fontSize:18}]}>Make a call</Text>
          </View>
          <MaterialCommunityIcons  
            name='greater-than'
            color='#FCA311'
            size={20}
          />
        </View>
        </TouchableOpacity>

    </View>
    </>
  );
}

export  {Help}
