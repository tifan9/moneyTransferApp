import React from 'react';
import { View, Text,Dimensions, TouchableOpacity, ScrollView, SafeAreaView, Image, Pressable } from 'react-native';
import tw from 'twrnc';
import Feather from  'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { InputText } from '../components/InputText';
import { ButtonComp } from '../components/ButtonComp';
export const NewCard = () => {
    const windowedHeight = Dimensions.get('screen').height
    const windowedWidth = Dimensions.get('screen').width
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

        </View>
    </>
  );
}
