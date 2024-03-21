import React , {useState, useEffect} from 'react';
import { View, Text, Pressable,StyleSheet,Dimensions, ActivityIndicator} from 'react-native';
import { ButtonComp } from '../components/ButtonComp';
import { StatusBar } from 'expo-status-bar';
import HeaderText from '../components/HeaderText';
import { InputLogin } from '../components/InputLogin';
import FlashMessage ,{showMessage} from 'react-native-flash-message';
import { Firebase_Auth } from '../../firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import tw from 'twrnc';


export default function LoginIn({navigation}) {
    const height= Dimensions.get('screen').height
    const width= Dimensions.get('screen').width
    const[email,setEmail]= useState('')
    const[password,setPassword]= useState('')
    const[emailError, setEmailError]=useState('')
    const[passwordError, setPasswordError]=useState('')
    const [showPassword,setshowPassword]= useState(true)
    const [loading, setLoading] = useState(false);

    const Autho = Firebase_Auth
   
   

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
      setLoading(true)
      if (ValidateForm() ){
      const Authenticate= async()=>{
        try{
          const createUser= await signInWithEmailAndPassword(Autho,email,password)
         setLoading(false)
          console.log(createUser)
          navigation.navigate('HomeScreen')
        }catch(error){
          showMessage({
            message: "Invalid user password/email",
            style:{paddingVertical:25},
            type: "danger",
            titleStyle:{fontSize:20,paddingHorizontal:15, color:'black'},
            backgroundColor: "#FCA210",
          });
          console.log(error)
        }
    }
    Authenticate()
     
   } 
  }
 

   const handlePassword=()=>{
    setshowPassword(!showPassword)
  }
       
    
  return (
    <View style={{backgroundColor:'#121315', height:height, width:width, gap:20}}>
        <StatusBar style='light'/>
        <FlashMessage position={"top"}/>
            <View style={styles.container1}>
            <HeaderText text='Log In'/>
              <View >
                  {loading?(<ActivityIndicator size={'middle'} color={'#FCA210'}/>):null }
                  <InputLogin TextTitle='Email Address' placeholder='email'iconNameLeft='email-outline' iconSize={20} value={email} onChangeText={setEmail} error={emailError}/>
                  <View>{emailError?<Text style={{color:'red', fontSize:12, paddingHorizontal:20,paddingTop:1}}> {emailError}</Text>:null}</View>
                  <InputLogin TextTitle='Password' placeholder='your password' iconNameLeft='lock-outline' iconNameRight={showPassword? 'eye-off-outline':'eye'} iconSize={20} secureTextEntry={showPassword} 
                  value={password}  onChangeText={setPassword} error={passwordError} onPress={handlePassword}/>
                  <View>{passwordError?<Text style={{color:'red', fontSize:12, paddingHorizontal:20,paddingTop:1}}> {passwordError}</Text>:null}</View>
              </View>

                <ButtonComp text1='Log In'  onPress={handleForm} />
                
            </View>
            <View style={[tw `pr-6 items-center justify-center`]}>
            <Text style={[tw `text-white`]}>Don't have an account?
            <Text style={[tw `text-yellow-500`]} onPress={()=>navigation.navigate('Register')}> Register</Text>
            </Text>
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