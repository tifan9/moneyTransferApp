import { TextInput, View } from "react-native"




export const VerificationInput=({mode, placeholder})=>{
   
    return(
        <View>
            <TextInput 
            placeholder={placeholder}
            placeholderTextColor={'white'}
            textColor='white'
            style={{ 
                
                width: 340,
                height:30,
                
                backgroundColor: 'transparent',  
                fontSize: 16,
                color: 'white',
                
            }}
            
            />
        </View>
    )
}