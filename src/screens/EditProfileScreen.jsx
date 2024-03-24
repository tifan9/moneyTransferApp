import React , {useState} from 'react';
import { View, Text,Dimensions, KeyboardAvoidingView, StatusBar, Platform} from 'react-native';
import { ButtonComp } from '../components/ButtonComp';
import { InputNumber } from '../components/InputNumber';
import  {InputText} from '../components/InputText';
import HeaderIconText from '../components/HeaderIconText';
import {DropdownComponent} from '../components/DropDownInput';
import FlashMessage ,{showMessage} from 'react-native-flash-message';
import tw from 'twrnc';
export default function EditProfileScreen({navigation}) {
    const height= Dimensions.get('screen').height
    const width= Dimensions.get('screen').width

    const [firstname, setfirstname] = useState('');
    const [firstnameError, setfirstnameError] = useState('');
    const [lastname, setlastname] = useState('');
    const [lastnameError, setlastnameError] = useState('');
    const [value, setValue] = useState('');
    const[valueError, setvalueError]=useState('')
    const [homeAddress, sethomeAddress] = useState('');
    const [homeAddressError, sethomeAddressError] = useState('');
    const [countryData, setcountryData] = useState([]);

    const ValidateForm= ()=>{
        let valid=true

        if (value.label===undefined){
            setvalueError('Country is required!')
            valid=false
        }else {
            setvalueError('')
            
        }if (homeAddress.trim() === ""){
            sethomeAddressError('Home Address is required!')
            valid=false

        }else{
            sethomeAddressError('') 
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
            showMessage({
                message: "saved",
                style:{paddingVertical:25, fontSize:20},
                type: "success",
                titleStyle:{fontSize:20,paddingHorizontal:15, color:'black'},
                backgroundColor: "#FCA210",
              });
       }
       
     } 

  return (
    <>
    <View style={[tw `bg-[#121315]`, {height:height, width:width}]}>
        <StatusBar style='light'/>
        <FlashMessage position={"top"}/>
        <View>
            <HeaderIconText text='Edit Profile' onPress={()=> navigation.navigate('Profile')}/>
        </View>
        <View>
            <Text style={{color:'#EE9B12', paddingVertical:8,paddingBottom:16, paddingHorizontal:17, fontSize:15}}>Personal Details</Text>
            <View>
                <InputText TextTitle='First Name' placeholder={'First Name '} placeholderTextColor={'#8F9294'} value={firstname} onChangeText={setfirstname}/>
                <View>{firstnameError?<Text style={{color:'red', fontSize:12, paddingHorizontal:20,paddingTop:1}}> {firstnameError}</Text>:null}</View>
                <InputText TextTitle='Last Name' placeholder={'Last Name '} value={lastname} onChangeText={setlastname}/>
                <View>{lastnameError?<Text style={{color:'red', fontSize:12, paddingHorizontal:20,paddingTop:1}}> {lastnameError}</Text>:null}</View>
            </View>
            <View>
                <Text style={{color:'#EE9B12', paddingVertical:20, paddingHorizontal:17, fontSize:15}}> Home Address</Text>
                <View>
                    <Text style={{color:'#cccdcf', paddingBottom:12, paddingHorizontal:20, fontSize:15}}> Country</Text>
                    <DropdownComponent valueError={valueError} setvalueError={setvalueError} value={value} setValue={setValue} countryData={countryData} setcountryData={setcountryData}/>
                    <View>{valueError?<Text style={{color:'red', fontSize:12, paddingHorizontal:35,paddingTop:6}}> {valueError}</Text>:null}</View>

                    <Text style={{color:'#cccdcf', paddingTop:23,paddingHorizontal:20, fontSize:15}}> Home Address</Text>
                    <InputNumber  placeholder={'KK 1 st'} value={homeAddress} onChangeText={sethomeAddress} iconSize={30} iconNameLeft={'home'} iconColor={'gray'}/>
                    <View>{homeAddressError?<Text style={{color:'red', fontSize:12, paddingHorizontal:20,paddingTop:6}}> {homeAddressError}</Text>:null}</View>
                </View>
                
            </View>
            <View>
                <ButtonComp text1='Save' onPress={handleForm} />
            </View>
        </View>
    </View>
    
    </>
    
  )
}
