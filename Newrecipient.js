import { StatusBar } from 'expo-status-bar';
import { View, Text,StyleSheet,Pressable } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import { SelectList } from 'react-native-dropdown-select-list';
export const Newrecipient = () => {


    const [selected, setSelected] =React.useState("");
    const pay =[
{key:'1', value:'4141567800009080',},
{key:'2', value:'4141658700000908'},
    ]




  return (
    <View style={styles.container} >
      <View>
         <View style={{display:'flex',flexDirection:'row',flexWrap:'wrap',padding:20,paddingTop:50,backgroundColor:'rgb(64,65,66)'}} >
          <Icon name='arrow-left' type='material-community' color='#f9be02' size={25} /> 
        <Pressable  onPress={()=>navigation.navigate('')}>
        <Text style={{color:'white',fontSize:20,marginHorizontal:20,fontWeight:'600'}} >New Recipient</Text>
        </Pressable>
        </View>

        <View style={{margin:10}} >
            <Text style={{color:'white',margin:5}} > Recipient Payment card</Text>
        <SelectList 
        data={pay} 
        setSelected={setSelected} 
        boxStyles={{backgroundColor:'#1a1a1a'}}
         dropdownTextStyles={{color:'white'}}
         placeholder='4141567800009080'
         inputStyles={{color:'white'}}
         search={false} 
         arrowicon={<FontAwesome name="chevron-down" size={12} color={'white'} />} 
         maxHeight={100}
        />
        </View>
        <View style={{margin:10}} >
        <Text style={{color:'white',margin:5}} > Recipient Phone Number</Text>
        </View>
        
      </View>


   <StatusBar style="auto" />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
   
  },
});