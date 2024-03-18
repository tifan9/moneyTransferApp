import React from 'react';
import { TextInput } from 'react-native-paper';

export const InputComp = ({ mode, placeholder,label }) => {
    return (
        <TextInput 
        label={label}
            placeholder={placeholder}  
            textColor='white' 
            style={{ 
                marginTop: 80, 
                width: 270, 
                
                backgroundColor: 'transparent',  
                fontSize: 18,
                color: 'white', // Set the input text color
            }}
            mode={mode}
            theme={{
                colors: {
                    primary: '#B9BCBE', 
                    
                    text: 'transparent', // Set label color here
                },
            }}
            underlineColor='transparent'
          
             // Set the placeholder text color
        />
    );
};
