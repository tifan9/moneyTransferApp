import React , {useState} from 'react';
import { View, Text,StyleSheet,Dimensions} from 'react-native';
import { ButtonComp } from '../components/ButtonComp';
import { StatusBar } from 'expo-status-bar';
import HeaderText from '../components/HeaderText';
import CountryDropDown from '../components/CountryDropDown';
import {DropdownComponent} from '../components/DropDownInput';


export default function Register({navigation}) {
    const height= Dimensions.get('screen').height
    const width= Dimensions.get('screen').width   
    const [value, setValue] = useState('');
    const[valueError, setvalueError]=useState('')
    const [selected, setSelected] = React.useState('+250');
    const [country, setCountry] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [phoneError, setphoneError] = React.useState('');
    const [countryData, setcountryData]= useState([])
   

    const ValidateForm= ()=>{
        let valid=true
    
        if (value.label===undefined){
          setvalueError('Country is required!')
          valid=false
        }else {
          setvalueError('')
        }if (phone===undefined || phone === ""){
          setphoneError('Phone Number is required!')
          valid=false
        
        }else if (isNaN(phone)){
          setphoneError('Phone Number is invalid')
          valid=false
        }else{
          setphoneError('')
        }
        return valid 
        
       }
      const handleForm= ()=>{
        if (ValidateForm()){
           navigation.navigate('LoginIn')
       }
       
     } 

  return (
    <View style={{backgroundColor:'#121315', height:height, width:width, gap:30}}>
        <StatusBar style='light'/>
            <View style={styles.container1}>
                <HeaderText text='Register'/>
                <View>{valueError?<Text style={{color:'red', fontSize:12, paddingHorizontal:35,paddingTop:1}}> {valueError}</Text>:null}</View>
                <DropdownComponent valueError={valueError} setvalueError={setvalueError} value={value} setValue={setValue} countryData={countryData} setcountryData={setcountryData}/>
                <View>{phoneError?<Text style={{color:'red', fontSize:12, paddingHorizontal:35,paddingTop:1}}> {phoneError}</Text>:null}</View>
                <CountryDropDown setCountry={setCountry} setPhone={setPhone} phone={phone} phoneError={phoneError} selected={selected} setSelected={setSelected} />
                <ButtonComp text1='Register' onPress={handleForm}/>
            </View>
    </View>
  )
  }

  
//  the styling part of this screen 

const styles=StyleSheet.create({
    container1:{
        gap:20
    }
})