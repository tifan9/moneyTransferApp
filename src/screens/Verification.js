import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { FlatList, Image, ImageBackground, Pressable, StyleSheet, Text, View, Dimensions, TouchableOpacity,Icon } from 'react-native';
import { Feather, Ionicons,MaterialIcons,Octicons,AntDesign } from 'react-native-vector-icons';
import { EditInput } from '../components/Editprofile';
import { VerificationInput } from '../components/Verification';
import { InputComp } from '../components/InputComp';
import { PaymentInput } from '../components/Paymentcard';


const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;


export default function Verification({navigation}) {
  
            return(
               <View style={styles.container}>
                <View  style={{flexDirection:'row', backgroundColor:'#202325', height:100,width:width,paddingTop:50,  paddingHorizontal:23, }}>
                    <AntDesign name='arrowleft' style={{color:'#FFC300',fontSize:19,paddingTop:8}}/>
                <Text style={{color:'white', fontSize:20,  fontWeight:'bold', paddingHorizontal:20, }}>Data Verification</Text>
                </View>

               
                <View style={{flexDirection:'column',gap:2,paddingHorizontal:25,paddingTop:13}}>
                    <Text style={{color:'#747375'}}>Deposit options</Text>
                    <VerificationInput placeholder={'Credit to card'}/>
                </View>

                <View style={{flexDirection:'column',gap:10,paddingHorizontal:25,paddingTop:13}}>
                    <Text style={{color:'#747375'}}>Destination country</Text>
                    <VerificationInput placeholder={'United States'}/>
                </View>
                <View style={{flexDirection:'column',gap:10,paddingHorizontal:25,paddingTop:13}}>
                    <Text style={{color:'#747375'}}>Amount</Text>
                    <VerificationInput placeholder={'kr 1,500.00'}/>
                </View>

                <View style={{flexDirection:'column',gap:10,paddingHorizontal:25,paddingTop:13}}>
                    <Text style={{color:'#747375'}}>Exhange rate</Text>
                    <VerificationInput placeholder={'1kr = 0,098 $'}/>
                </View>

                <View style={{flexDirection:'column',gap:10,paddingHorizontal:25,paddingTop:15}}>
                    <Text style={{color:'#747375'}}>Fee</Text>
                    <VerificationInput placeholder={'0 kr'}/>
                </View>

                <View style={{flexDirection:'column',gap:10,paddingHorizontal:25,paddingTop:13}}>
                    <Text style={{color:'#747375'}}>Total amount due</Text>
                    <VerificationInput placeholder={'146,67 USD'}/>
                </View>
              <TouchableOpacity>
                <Text style={{width:340,backgroundColor:'#313436',marginHorizontal:20, textAlign:'center', height:40,paddingTop:10, borderRadius:10,top:8, color:'#FFC300',fontSize:17,fontWeight:'bold'}}>Edit</Text>
              </TouchableOpacity>


              <View style={{flexDirection:'column',gap:10,paddingHorizontal:25,paddingTop:16}}>
                    <Text style={{color:'white'}}>Recepient payment card</Text>
                   <View style={{flexDirection:'row',display:'flex',gap:10,justifyContent:'space-between',}}>
                    <Image source={require('../../assets/img/ma.jpg')} style={{width:20,height:20, position:'absolute',top:16,marginHorizontal:9}}/>
                   <PaymentInput placeholder={'****2455'}/>
                   </View>
                </View>

                <TouchableOpacity>
                <Text style={{width:340,backgroundColor:'#FFC300',marginHorizontal:20, textAlign:'center', height:50,paddingTop:16, borderRadius:10,top:20, color:'#313436',fontSize:17,fontWeight:'bold'}}>Pay</Text>
              </TouchableOpacity>
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
