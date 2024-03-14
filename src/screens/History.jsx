import React from 'react';
import { View, Text,Dimensions, TouchableOpacity, ScrollView, SafeAreaView, Image, Pressable } from 'react-native';
import tw from 'twrnc';
import Feather from  'react-native-vector-icons/Feather'
import { Transfer } from '../components/Transfer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const windowedHeight = Dimensions.get('screen').height
const width = Dimensions.get('screen')
export const History = () => {
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
        </View>
    </>
  );
}
