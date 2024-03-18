import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { View, Text,Dimensions, KeyboardAvoidingView, ScrollView} from 'react-native';
import CountryDropDown from '../components/CountryDropDown';
import HeaderIconText from '../components/HeaderIconText';
import  {InputText} from '../components/InputText';
import { ButtonComp } from '../components/ButtonComp';
import { InputNumber } from '../components/InputNumber';
// import { ScrollView } from 'react-native-gesture-handler';




export default function NewRecipient() {
    const WindowHeight= Dimensions.get('screen')
    const WindowWidth= Dimensions.get('screen')

    const [selected, setSelected] = useState('+250');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setphoneError] = useState('');
    const [debitCard, setdebitCard] = useState('');
    const [debitCardError, setdebitCardError] = useState('');
    const [countryData, setcountryData]= useState([])
    const [firstname, setfirstname] = useState('');
    const [firstnameError, setfirstnameError] = useState('');
    const [lastname, setlastname] = useState('');
    const [lastnameError, setlastnameError] = useState('');


    const ValidateForm= ()=>{
        let valid=true

        if (phone===undefined || phone === ""){
          setphoneError('Phone Number is required!')
          valid=false
        
        }else if (isNaN(phone)){
          setphoneError('Phone Number is invalid')
          valid=false
        }else{
          setphoneError('')
        }if (debitCard.trim() === ""){
            setdebitCardError('Card Number is required!')
            valid=false

        }else if( debitCard.length>5 || debitCard.length<5){
            setdebitCardError('Card Number can not exceed 5 or less than 5')
            valid=false
        }else{
            setdebitCardError('') 
        }if (firstname.trim() === ""){
            setfirstnameError(' Name is required!')
            valid=false

        }else if( /\d/.test(lastname)){
            setfirstnameError('Name is invalid')
            valid=false
        }else{
            setfirstnameError('') 
        }if (lastname.trim() === ""){
            setlastnameError('Name is required!')
            valid=false

        }else if( /\d/.test(lastname)){
            setlastnameError('Name is invalid')
            valid=false
        }else{
            setlastnameError('') 
        }
        return valid 
        
       }
      const handleForm= ()=>{
        if (ValidateForm()){
           navigation.navigate('LoginIn')
       }
       
     } 
  return (
   
    <View style={{backgroundColor:'#121315', height:height, width:width, gap:20}}>

        <StatusBar style='light'/>
        <View >
            <View>
                <HeaderIconText text='New Recipient' />
            </View>
            <View>
                <ScrollView>
                <View>
                    <Text style={{color:'#cccdcf', paddingTop:23,paddingHorizontal:20, fontSize:15}}> Recipient payment card</Text>
                   <InputNumber keyboardType={'numeric'}  placeholder={'000-22'} value={debitCard} onChangeText={setdebitCard} iconSize={30} iconNameLeft={'credit-card'} iconColor={'gray'}/>
                   <View>{debitCardError?<Text style={{color:'red', fontSize:12, paddingHorizontal:20,paddingTop:6}}> {debitCardError}</Text>:null}</View>
                </View>
                
                <View style={{}}>
                    <Text  style={{color:'#cccdcf', paddingTop:23, paddingBottom:14,paddingHorizontal:20, fontSize:15}}> Recipient phone Number</Text>
                    <CountryDropDown setCountry={setCountry} countryData={countryData} setPhone={setPhone} phone={phone} phoneError={phoneError}  selected={selected} setSelected={setSelected}/>
                    <View>{phoneError?<Text style={{color:'red', fontSize:12, paddingHorizontal:20,paddingTop:6}}> {phoneError}</Text>:null}</View>

                </View>
               
                <View>
                    <Text style={{color:'#EE9B12', paddingVertical:23, paddingHorizontal:17, fontSize:15}}> Recipient personal Details</Text>
                    <View >
                        <InputText TextTitle='First Name' placeholder={'First Name '} placeholderTextColor={'#8F9294'} value={firstname} onChangeText={setfirstname}/>
                        <View>{firstnameError?<Text style={{color:'red', fontSize:12, paddingHorizontal:20,paddingTop:1}}> {firstnameError}</Text>:null}</View>
                        <InputText TextTitle='Last Name' placeholder={'Last Name '} value={lastname} onChangeText={setlastname}/>
                        <View>{lastnameError?<Text style={{color:'red', fontSize:12, paddingHorizontal:20,paddingTop:1}}> {lastnameError}</Text>:null}</View>
                    </View>

                </View>
                
                <View>
                    <ButtonComp text1='Continue' onPress={handleForm}/>
                </View>
                </ScrollView>
            </View>
            <View>

            </View>
        </View>
    </View>
   
  )
}
