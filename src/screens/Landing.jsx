import React from 'react';
import { View, Text,Dimensions, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import tw from 'twrnc';
import Feather from  'react-native-vector-icons/Feather'
import { Transfer } from '../components/Transfer';

const windowedHeight = Dimensions.get('screen').height
const width = Dimensions.get('screen')
const Landing = () => {
  return (
    <>
    {/* <View style={{height:50}}></View> */}
    <View style={[tw `bg-[#121214]`, {height:windowedHeight}]}>
    <View style={[tw `border-b border-gray-500 bg-[#202325] pt-8 `, {height:130} ]}>
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
                tw ` bg-yellow-500 rounded-lg py-3 px-5`,
                {width: '80%'}
              ]}
            >
              <Text style={tw `text-black text-xl font-bold`}>Send Money</Text>
            </TouchableOpacity>
          </View>
            </View>
            <Transfer  />
            <View style={[tw `flex p-5 mt-10 m-5 gap-5 border rounded-xl bg-[#202325]`]}>
              <View>
                <Text style={[tw `text-white font-bold text-2xl`]}>Helpful tips</Text>
                <View style={[tw `border-b border-gray-500 my-4`]}></View>
              </View>
              <View style={[tw `flex flex-row gap-3 `,{flex: 1}]}>
                <View style={[tw `bg-[#23C16B] p-5 rounded-xl w-16 h-16`]}>
                <Feather  
                  name='percent'
                  size={23}
                  color='white'
                />
                </View>
                <View style={[tw `flex-1 `]}>
                <Text style={[tw `text-white font-bold text-xl`]}>Fee 0%</Text>
                <Text style={[tw `text-gray-500 `]}>We do not charge fees for transfers with currency conversion. For example, if you are sending in USD but paying for it in EUR.</Text>
                <TouchableOpacity style={[tw `flex flex-row  gap-2 pt-5`]}>
                  <Text style={[tw `text-yellow-500`]}>Transfer funds</Text>
                  <Feather  
                  name='arrow-right'
                  size={18}
                  color='#FCA311'
                  />
                </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
    </View>
    
        
    </>
  );
}

export {Landing}
