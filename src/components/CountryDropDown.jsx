import React from 'react';
import {View} from 'react-native';
import CountryCodeDropdownPicker from 'react-native-dropdown-country-picker'

 export default function CountryDropDown({selected, setSelected, setCountry, phone,phoneError, setPhone}){
  
  return(
    <View style={{paddingHorizontal:20, gap:20}}>
        <CountryCodeDropdownPicker 
        selected={selected} 
        setSelected={setSelected}
        setCountryDetails={setCountry} 
        phone={phone} 
        setPhone={setPhone} 
        error={phoneError}
        phoneStyles={{color:'white', borderColor: 'gray',borderWidth: 0.5, paddingVertical:13}}
        countryCodeTextStyles={{fontSize: 13}}
        countryCodeContainerStyles={{backgroundColor:'#FCA210', paddingVertical:12, borderColor:'transparent'}}
        searchStyles={{borderColor:'transparent'}}
        
        searchTextStyles={{fontSize:16, borderColor:'transparent', paddingLeft:7, color:'white'}}
        
      />
    </View>
   
  )

};
