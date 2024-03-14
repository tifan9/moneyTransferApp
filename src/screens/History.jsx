import React from 'react';
import { View, Text,Dimensions, TouchableOpacity, ScrollView, SafeAreaView, Image, Pressable } from 'react-native';
import tw from 'twrnc';
import Feather from  'react-native-vector-icons/Feather'
import { Transfer } from '../components/Transfer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInput, Checkbox, MD3Colors, Card } from "react-native-paper";
import { Input } from "react-native-elements";
const windowedHeight = Dimensions.get('screen').height
const width = Dimensions.get('screen')
export const History = ({navigation}) => {
  return (
    <>
        <View style={[tw `bg-[#121214]`, {height:windowedHeight}]}>
        <View style={[tw `border-b border-gray-500 bg-[#202325] pt-8 `, {height:120} ]}>
          <View style={[tw `flex flex-row gap-4 align-center p-5 pt-10`]}>
              <TouchableOpacity
                onPress={() => navigation.navigate("HomeScreen")}
              >
              <Feather  
                name='arrow-left'
                size={25}
                color='#FCA311'
              />
              </TouchableOpacity>
                <Text style={[tw `text-white font-bold text-2xl`]}>History</Text>
          </View>
      </View>
      {/* Search */}
      <View style={[tw `pt-5 px-2 `]}>
      <TextInput
            underlineColor="transparent"
            style={{
              marginBottom: 10,
              marginHorizontal: 10,
              backgroundColor: "#202325",
            }}
            mode="outlined"
            textColor="white"
            placeholder="Search for recipient"
            theme={{ roundness: 3 }}
            left={
              <TextInput.Icon
                icon={"magnify"}
                color={"#BBC3A4"}
                style={{ opacity: 0.5 }}
              />
            }
          />
      </View>
            <ScrollView>
              <View style={[tw ` p-5 m-5 mb-2 border rounded-xl bg-[#202325]`]}>
              <View style={[tw `flex flex-row justify-between items-center`]}>
                  <Image  
                  source={require('../../assets/img/avatar.png')} 
                  style={[tw `rounded-3xl`,{width: 40, height: 40}]}
                  />
                  <View style={[tw ` gap-y-1`, {paddingLeft:8}]}>
                  <Text style={[tw `text-white`, {fontSize:15}]}>Ashley Stone</Text>
                  <Text style={[tw `text-[#229055]`]}>successful</Text>
                  </View>

                  <View style={[tw `gap-y-1`]}>
                    <Text style={[tw `text-white`]}>$ 989.43</Text>
                    <Text style={[tw `text-[#4D5052]`]}>05/12/2023</Text>
                  </View>
                </View>
              </View>

              <View style={[tw ` p-5 m-5 mb-2 border rounded-xl bg-[#202325]`]}>
              <View style={[tw `flex flex-row justify-between items-center`]}>
                  <Image  
                  source={require('../../assets/img/avatar.png')} 
                  style={[tw `rounded-3xl`,{width: 40, height: 40}]}
                  />
                  <View style={[tw ` gap-y-1`, {paddingLeft:8}]}>
                  <Text style={[tw `text-white`, {fontSize:15}]}>Ashley Stone</Text>
                  <Text style={[tw `text-[#229055]`]}>successful</Text>
                  </View>

                  <View style={[tw `gap-y-1`]}>
                    <Text style={[tw `text-white`]}>$ 989.43</Text>
                    <Text style={[tw `text-[#4D5052]`]}>05/12/2023</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
        </View>
    </>
  );
}
