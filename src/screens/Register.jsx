import React , {useState, useContext} from 'react';
import { View, Text,StyleSheet,Dimensions} from 'react-native';
import { ButtonComp } from '../components/ButtonComp';
import { StatusBar } from 'expo-status-bar';
import HeaderText from '../components/HeaderText';
import { InputLogin } from '../components/InputLogin';
import { Firebase_Auth } from '../../firebaseConfig.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import tw from 'twrnc';
import { userUserAuth } from '../context/UserAuthContext.js';


export default function Register({navigation}) {
    const height= Dimensions.get('screen').height
    const width= Dimensions.get('screen').width   
    const[email,setEmail]= useState('')
    const[password,setPassword]= useState('')
    const[emailError, setEmailError]=useState('')
    const[passwordError, setPasswordError]=useState('')
    const [showPassword,setshowPassword]= useState(true)
    // const Autho = Firebase_Auth
   const {signUp} = userUserAuth()

  
    const isValidEmail=(email)=>{
      const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
      return(
        emailRegex.test(email)
      )
    }

    const ValidateForm= ()=>{
      let valid=true
  
      if (email.trim()==('')){
        setEmailError('Email is required!')
        valid=false
      }else if (!isValidEmail(email)){
        setEmailError('Email is invalid')
        valid=false
      }else{
        setEmailError('')
      }
      if (password.trim()==('')){
          setPasswordError('Password is required')
      }else {
          setPasswordError('')
      }
      return valid 
      
     }
     const handleForm= ()=>{
      if (ValidateForm()){
        const Authenticate= async()=>{
            try{
              await signUp(email,password)
              // console.log(createUser)
              
              navigation.navigate('Login')
            }catch(error){
              console.log(error)
            }
        }
        return valid 
        
       }
      const handleForm= ()=>{
        if (ValidateForm()){
           navigation.navigate('HomeScreen')
       }
       
     } 
    }
    const handlePassword=()=>{
      setshowPassword(!showPassword)
    }
  return (
    <View style={{backgroundColor:'#121315', height:height, width:width, gap:20}}>
        <StatusBar style='light'/>
            <View style={styles.container1}>
            <HeaderText text='Register'/>
              <View >

                  <InputLogin TextTitle='Email Address' placeholder='email'iconNameLeft='email-outline' iconSize={20} value={email} onChangeText={setEmail} error={emailError}/>
                  <View>{emailError?<Text style={{color:'red', fontSize:12, paddingHorizontal:20,paddingTop:1}}> {emailError}</Text>:null}</View>
                  <InputLogin TextTitle='Password' placeholder='your password' iconNameLeft='lock-outline' iconNameRight={showPassword? 'eye-off-outline':'eye'} iconSize={20} secureTextEntry={showPassword} 
                  value={password}  onChangeText={setPassword} error={passwordError} />
                  <View>{passwordError?<Text style={{color:'red', fontSize:12, paddingHorizontal:20,paddingTop:1}}> {passwordError}</Text>:null}</View>
              </View>

                <ButtonComp text1='Register' onPress={handleForm} />
            </View><View style={[tw `pr-6 items-center justify-center`]}>
            <Text style={[tw `text-white`]}>Already have an account?
            <Text style={[tw `text-yellow-500`]} onPress={()=>navigation.navigate('Login')}> Login</Text>
            </Text>
            </View>
    </View>
  )
  }

  
//  the styling part of this screen 

const styles=StyleSheet.create({
    container1:{
        gap:10
    }
})