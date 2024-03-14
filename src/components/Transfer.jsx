import React from 'react';
import { View, Text,Dimensions, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import tw from 'twrnc';
import Feather from  'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/core';

export const Transfer = () => {
  const navigation = useNavigation();
  return (
    <>
        <View style={[tw `flex p-5 mt-6 m-5 gap-5 border rounded-xl bg-[#202325]`]}>
        <View>
                <Text style={[tw `text-white font-bold text-2xl`]}>Transfers</Text>
                <View style={[tw `border-b border-gray-500 my-4`]}></View>
                <View style={[tw `flex flex-row justify-between items-center flex-wrap pb-5`]}>
                  <Image  
                  source={require('../../assets/img/avatar.png')} 
                  style={[tw `rounded-3xl`,{width: 40, height: 40}]}
                  />
                  <View>
                  <Text style={[tw `text-white`, {fontSize:15}]}>Ashley Stone</Text>
                  <Text style={[tw `text-[#229055]`]}>successful</Text>
                  </View>

                  <View>
                    <Text style={[tw `text-white`]}>$ 989.43</Text>
                    <Text style={[tw `text-[#4D5052]`]}>05/12/2023</Text>
                  </View>
                </View>

                <TouchableOpacity style={[
                  tw `rounded-lg bg-[#303437] py-4 px-5 w-full flex justify-center items-center`,
                ]}
                onPress={() => navigation.navigate("history")}
                >
                  <Text style={[tw `text-yellow-500`,{fontSize:18}]}>Show history</Text>
                </TouchableOpacity>
              </View>
        </View>
    </>
  );
}

