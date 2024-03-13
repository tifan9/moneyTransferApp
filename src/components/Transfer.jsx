import React from 'react';
import { View, Text,Dimensions, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import tw from 'twrnc';
import Feather from  'react-native-vector-icons/Feather'

export const Transfer = () => {
  return (
    <>
        <View style={[tw `flex p-5 mt-10 m-5 gap-5 border rounded-xl bg-[#202325]`]}>
        <View>
                <Text style={[tw `text-white font-bold text-2xl`]}>Transfers</Text>
                <View style={[tw `border-b border-gray-500 my-4`]}></View>
              </View>
        </View>
    </>
  );
}

