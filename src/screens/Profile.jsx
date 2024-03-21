import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { FlatList, Image, ImageBackground, Pressable, StyleSheet, Text, View, Dimensions, TouchableOpacity,Icon } from 'react-native';
import { Feather, Ionicons,MaterialIcons,Octicons } from 'react-native-vector-icons';


const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;


export const Profile = ({navigation}) => {
  
            return(
               <View style={styles.container}>
                <Text style={{color:'#D8DBDD', fontSize:20, backgroundColor:'#202325', height:100,width:width,paddingTop:50, fontWeight:'bold', paddingHorizontal:30, }}>Menu </Text>
               <View style={{backgroundColor:'#202325', flexDirection:'row', top:20, width:340,borderRadius:10,paddingBottom:10,paddingTop:10,marginHorizontal:25, gap:20,justifyContent:'center',alignItems:'center',paddingRight:90}}>
                <Image source={require('../../assets/img/avatar.png')} style={{width:80,height:80,borderRadius:90}}/>
                <View style={{flexDirection:'column',gap:10}}>
                    <Text style={{color:'white',fontWeight:'bold', fontSize:15}}>Jessica Jones</Text>
                    <Pressable>
                        <Text style={{color:'grey',fontWeight:'bold', fontSize:15}}>edit profile</Text>
                    </Pressable>
                </View>
               </View>

               <View style={{flexDirection:'column',paddingHorizontal:17,gap:28}}>
                <View style={{flexDirection:'row', top:40, paddingHorizontal:14,gap:60}}>
                <View style={{flexDirection:'row', gap:9}}>
         <Feather name="star" size={24} color="#4A4A4C" />
         <Text style={{color:'#CBCBCD',paddingRight:100,fontSize:16,fontWeight:'bold'}}>Referal program</Text>
         </View>
          <TouchableOpacity>
          <Feather name="chevron-right" size={24} color="#FFC300" />
          </TouchableOpacity>
                </View>
               
                <View style={{flexDirection:'row', top:40, paddingHorizontal:14,gap:108}}>
                <View style={{flexDirection:'row', gap:9}}>
                <Octicons name="credit-card" size={24} color="#4A4A4C" />
         <Text style={{color:'#CBCBCD',paddingRight:100,fontSize:16,fontWeight:'bold'}}>My Cards</Text>
         </View>
          <TouchableOpacity>
          <Feather name="chevron-right" size={24} color="#FFC300" />
          </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', top:40, paddingHorizontal:14,gap:83}}>
                <View style={{flexDirection:'row', gap:9}}>
                <Feather name="bell" size={24} color="#4A4A4C" />
         <Text style={{color:'#CBCBCD',paddingRight:100,fontSize:16,fontWeight:'bold'}}>Notifications</Text>
         </View>
          <TouchableOpacity>
          <Feather name="chevron-right" size={24} color="#FFC300" />
          </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', top:40, paddingHorizontal:14,gap:105}}>
                <View style={{flexDirection:'row', gap:9}}>
                <Feather name="map-pin" size={24} color="#4A4A4C" />
         <Text style={{color:'#CBCBCD',paddingRight:100,fontSize:16,fontWeight:'bold'}}>Locations</Text>
         </View>
          <TouchableOpacity>
          <Feather name="chevron-right" size={24} color="#FFC300" />
          </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', top:40, paddingHorizontal:14,gap:96}}>
                <View style={{flexDirection:'row', gap:9}}>
                <Ionicons name="language" size={24} color="#4A4A4C" />
         <Text style={{color:'#CBCBCD',paddingRight:100,fontSize:16,fontWeight:'bold'}}>Languages</Text>
         </View>
          <TouchableOpacity>
          <Feather name="chevron-right" size={24} color="#FFC300" />
          </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', top:40, paddingHorizontal:14,gap:74}}>
                <View style={{flexDirection:'row', gap:9}}>
                <MaterialIcons name="info-outline" size={24} color="#4A4A4C" />
         <Text style={{color:'#CBCBCD',paddingRight:100,fontSize:16,fontWeight:'bold'}}>About the app</Text>
         </View>
          <TouchableOpacity>
          <Feather name="chevron-right" size={24} color="#FFC300" />
          </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', top:40, paddingHorizontal:14,gap:108}}>
                <View style={{flexDirection:'row', gap:9}}>
                <MaterialIcons name="analytics" size={24} color="#4A4A4C" />
         <Text style={{color:'#CBCBCD',paddingRight:100,fontSize:16,fontWeight:'bold'}}>Analytics</Text>
         </View>
          <TouchableOpacity>
          <Feather name="chevron-right" size={24} color="#FFC300" />
          </TouchableOpacity>
                </View>
               </View>

               <View style={{flexDirection:'row', top:90, paddingHorizontal:40,gap:115}}>
                <View style={{flexDirection:'row', gap:9}}>
                <MaterialIcons name="logout" size={24} color="#6C1B1F" />
         <TouchableOpacity>
         <Text style={{color:'#6C1B1F',paddingRight:100,fontSize:16,fontWeight:'bold'}}>Log Out</Text>
         </TouchableOpacity>
         </View>
         </View>
         
               </View>

            );

           }
   



const styles = StyleSheet.create({
  container: {
  backgroundColor:'#121214',
  height:height,
  width:width
  },
});
