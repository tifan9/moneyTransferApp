import React , {useEffect} from 'react';
  import { StyleSheet, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  
  const data = [
    { label: 'Rwanda', value: '1' },
    { label: 'Kenya', value: '2' },
    { label: 'Burundi', value: '3' },
    { label: 'Tanzania', value: '4' },
    { label: 'DR Congo', value: '5' },
    { label: 'Uganda', value: '6' },
  ];

  const DropdownComponent = ({value, isFocus,valueError, setValue, countryData, setcountryData}) => {
    useEffect(()=>{
      let headers = new Headers();
      headers.append("X-CSCAPI-KEY", "STZjQjBjUTY1T3B5cEY3bHBJZzNxNDJObXRDcGNsYkU2cTdQMWYzTg==");
    
      let requestOptions = {
          method: 'GET',
          headers: headers,
          redirect: 'follow'
      };
    
      fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log(JSON.stringify(result));
        let count = Object.keys(result).length;
        let countryArray=[];
        for (let i=0; i<count; i++){
          countryArray.push({
            value:result[i].iso2,
            label:result[i].name,
          })
        }
        setcountryData(countryArray);
      })
      .catch(error => console.log('error', error));
    
    },[])

    return (
      <View style={styles.container}>
       <View>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#FCA210' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={countryData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Enter your Country' : ''}
          searchPlaceholder="Search..."
          value={value}
          error={valueError}
          containerStyle={{backgroundColor:'white', borderColor:'#FCA210'}}
          onChange={(value) => setValue(value)}
          itemTextStyle={{color:'black'}}       
        />

        </View>
      </View>
    );
  };

  export {DropdownComponent};

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
    },
    dropdown: {
      height: 43,
      borderColor: '#41464A',
      borderWidth: 1,
      borderRadius: 8,
      opacity:0.8,
      paddingHorizontal: 20,
    },
    label: {
      position: 'absolute',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 14,
      color:'gray',
    },
    selectedTextStyle: {
      fontSize: 16,
      color:'white',
    },
    
    inputSearchStyle: {
      height: 35,
      fontSize: 16,
      borderColor:'#FCA210'
    },
  });