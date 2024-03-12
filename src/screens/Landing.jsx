import React from 'react';
import { View, Text,Dimensions, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import tw from 'twrnc';
import Feather from  'react-native-vector-icons/Feather'

const windowedHeight = Dimensions.get('screen').height
const width = Dimensions.get('screen')
const Landing = () => {
  return (
    <>
    {/* <View style={{height:50}}></View> */}
    <View style={[tw `bg-[#121214]`, {height:windowedHeight}]}>
    <View style={[tw `bg-[#202325] pt-5 `, {height:130} ]}>
            <View style={[tw `flex flex-row items-center justify-between p-5 pt-10`]}>
              <View>
                <Text style={[tw `text-white font-bold text-2xl`]}>Hey, There</Text>
                </View>
                <View style={[tw `flex flex-row gap-3 `]}>
                  <TouchableOpacity>
                    <Feather  name='bell' size={24}color={'white'}/>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Feather  name='bell' size={24}color={'white'}/>
                  </TouchableOpacity>
                </View>
            </View>
            </View>   
          {/* body  */}
          <ScrollView>
            <View style={[tw `flex flex-col items-center justify-center p-5 mt-10 m-5 gap-5 border rounded-xl bg-[#202325]`]}>
              <Image  
              source={require('../../assets/img/slide1.png')}
              resizeMode="cover"
              style={tw `justify-center rounded-3xl`}
              />
              <Text style={[tw `text-white font-bold text-2xl`]}>Make your first transfer</Text>
              <View style={[tw ``, {}]}>
            <TouchableOpacity
              style={[
                tw ` bg-yellow-500 rounded-lg w-[100%] py-3 px-5`,
                {},
              ]}
            >
              <Text style={tw `text-black text-xl font-bold`}>Send Money</Text>
            </TouchableOpacity>
          </View>
            </View>
          </ScrollView>
    </View>
    
        
    </>
  );
}

export {Landing}
