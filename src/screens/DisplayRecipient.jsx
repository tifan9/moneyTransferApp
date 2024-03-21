import React from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import tw from "twrnc";
import Feather from "react-native-vector-icons/Feather";
import { Transfer } from "../components/Transfer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const windowedHeight = Dimensions.get("screen").height;
const width = Dimensions.get("screen");
export const DisplayRecipient = ({ navigation }) => {
  return (
    <>
      <View style={[tw`bg-[#121214]`, { height: windowedHeight }]}>
        <View
          style={[
            tw `border-b border-gray-500 bg-[#202325] pt-8 `,
            { height: 120 },
          ]}
        >
          <View style={[tw`flex flex-row gap-4 items-center p-5 pt-10`]}>
            <TouchableOpacity onPress={() => navigation.navigate("Sendmoney")}>
              <Feather name="arrow-left" size={25} color="#FCA311" />
            </TouchableOpacity>
            <Text style={[tw`text-white font-bold text-2xl`]}>
              Select recipient
            </Text>
          </View>
        </View>
        {/* Display recipients */}
        <View>
        <View style={[tw ` p-6 flex flex-row justify-between items-start`]}>
          <View style={[tw `flex flex-row items-center `]}>
            <Image
              source={require("../../assets/img/avatar.png")}
              style={[tw `rounded-3xl`, { width: 40, height: 40 }]}
            />
            <View style={[tw ` gap-y-1`, {paddingLeft:8}]}>
                  <Text style={[tw `text-white`, {fontSize:15}]}>Ashley Stone</Text>
                  <Text style={[tw `text-gray-500`]}> +1(555)00-000-9999</Text>
                  </View>
          </View>
          <Pressable>
          <MaterialCommunityIcons  
                name='greater-than'
                size={25}
                color='#FCA311'
              />
          </Pressable>
        </View>
        <View style={[tw `border-b border-gray-500 mx-5`]}></View>
        </View>

        {/* Display recipients */}
        <View>
        <View style={[tw ` p-6 flex flex-row justify-between items-start`]}>
          <View style={[tw `flex flex-row items-center `]}>
            <Image
              source={require("../../assets/img/avatar.png")}
              style={[tw `rounded-3xl`, { width: 40, height: 40 }]}
            />
            <View style={[tw ` gap-y-1`, {paddingLeft:8}]}>
                  <Text style={[tw `text-white`, {fontSize:15}]}>Ashley Stone</Text>
                  <Text style={[tw `text-gray-500`]}> +1(555)00-000-9999</Text>
                  </View>
          </View>
          <Pressable>
          <MaterialCommunityIcons  
                name='greater-than'
                size={25}
                color='#FCA311'
              />
          </Pressable>
        </View>
        <View style={[tw `border-b border-gray-500 mx-5`]}></View>
        </View>

        {/* Display recipients */}
        <View>
        <View style={[tw ` p-6 flex flex-row justify-between items-start`]}>
          <View style={[tw `flex flex-row items-center `]}>
            <Image
              source={require("../../assets/img/avatar.png")}
              style={[tw `rounded-3xl`, { width: 40, height: 40 }]}
            />
            <View style={[tw ` gap-y-1`, {paddingLeft:8}]}>
                  <Text style={[tw `text-white`, {fontSize:15}]}>Ashley Stone</Text>
                  <Text style={[tw `text-gray-500`]}> +1(555)00-000-9999</Text>
                  </View>
          </View>
          <Pressable>
          <MaterialCommunityIcons  
                name='greater-than'
                size={25}
                color='#FCA311'
              />
          </Pressable>
        </View>
        <View style={[tw `border-b border-gray-500 mx-5`]}></View>
        </View>
        <View style={[tw `p-6`]}>
        <TouchableOpacity style={[
                  tw `rounded-lg bg-yellow-500 py-5 p-5 w-full flex flex-row justify-center items-center`,
                ]}
                onPress={() => navigation.navigate('NewRecipient')}
                >
                  <Feather  
                      name="plus"
                      size={20}
                      style={[tw ``]}
                    />
                  <Text style={[tw `font-bold pl-2`,{fontSize:18}]}>New Recipient</Text>
        </TouchableOpacity>
        </View>
        
      </View>
    </>
  );
};
