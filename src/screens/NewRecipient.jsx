import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Pressable,StyleSheet,Dimensions} from 'react-native';
import HeaderText from '../components/HeaderText';
import CountryDropDown from '../components/CountryDropDown';



export default function NewRecipient() {
    const height= Dimensions.get('screen').height
    const width= Dimensions.get('screen').width

    const [selected, setSelected] = useState('+250');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setphoneError] = useState('');
    const [countryData, setcountryData]= useState([])


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
        }
        return valid 
        
       }
      const handleForm= ()=>{
        if (ValidateForm()){
           navigation.navigate('LoginIn')
       }
       
     } 
  return (
    <View  style={{backgroundColor:'#121315', height:height, width:width, gap:20}}>
        <StatusBar style='light'/>
        <View>
            <HeaderText text= 'New Recipient'/>
            <View>
                <View>
                    <Text> Recipient phone Number</Text>
                    <CountryDropDown setCountry={setCountry} countryData={countryData} setPhone={setPhone} phone={phone} phoneError={phoneError}  selected={selected} setSelected={setSelected}/>
                    <View>{phoneError?<Text style={{color:'red', fontSize:12, paddingHorizontal:35,paddingTop:1}}> {phoneError}</Text>:null}</View>

                </View>
                
                <View>
                    <Text> Recipient phone Number</Text>
                    <CountryDropDown setCountry={setCountry} countryData={countryData} setPhone={setPhone} phone={phone} phoneError={phoneError}  selected={selected} setSelected={setSelected}/>
                    <View>{phoneError?<Text style={{color:'red', fontSize:12, paddingHorizontal:35,paddingTop:1}}> {phoneError}</Text>:null}</View>

                </View>
                <View>
                    
                </View>
            </View>
            <View>

            </View>
        </View>
    </View>
  )
}
