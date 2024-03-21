import { TextInput, View } from "react-native"




export const PaymentInput=({mode, placeholder})=>{
   
    return(
        <View>
            <TextInput 
            placeholder={placeholder}
            placeholderTextColor={'#747375'}
            textColor='white'
            style={{ 
                position:'relative',
                paddingHorizontal:38,
                width: 340,
                height:50,
                borderWidth:1,
                borderColor:'#313436',
                borderRadius:10,
                backgroundColor: 'transparent',  
                fontSize: 14,
                color: 'white',
                
            }}
            
            />
        </View>
    )
}