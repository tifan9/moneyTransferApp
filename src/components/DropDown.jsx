import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Entypo } from '@expo/vector-icons';

const data = [
  { label: '4111 1111 1111 1111', value: '1' },
  { label: '4111 1111 1111 1111', value: '2' },
  { label: '4111 1111 1111 1111', value: '3' },
  { label: '4111 1111 1111 1111', value: '4' },
  { label: '4111 1111 1111 1111', value: '5' },
  { label: '4111 1111 1111 1111', value: '6' },
  { label: '4111 1111 1111 1111', value: '7' },
  { label: '4111 1111 1111 1111', value: '8' },
];

const DropdownCard = () => {
  const [value, setValue] = useState(null);

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <Entypo
            style={styles.icon}
            color="black"
            name="credit-card"
            size={20}
          />
        )}
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      containerStyle={{backgroundColor:'black', borderColor:'#cccdcf'}}
      
      labelField="label"
      valueField="value"
      placeholder="Select Card Number"
      searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      renderLeftIcon={() => (
        <Entypo style={styles.icon} color="gray" name="credit-card" size={20} />
      )}
      renderItem={renderItem}
      itemTextStyle={{color:'white'}}
      activeColor= 'rgb(239,155,18)'
     
    />
  );
};

export default DropdownCard;

const styles = StyleSheet.create({
  dropdown: {

    marginHorizontal: 21,
    height: 43,
    // backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth:0.3,
    borderColor:'gray',
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 10,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 14,
    color:'white'
  },
  placeholderStyle: {
    fontSize: 16,
    color:'white'
  },
  selectedTextStyle: {
    fontSize: 14,
    color:'white'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 15,
  },
});