import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, View, Pressable,} from 'react-native';
import { Icon } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

export const Sendmoney = () => {
  const [selected, setSelected] =React.useState("");

  const pay =[
{key:'1', value:'SEK'},
{key:'2', value:'SEK'},
{key:'3', value:'SEK'},
{key:'4', value:'SEK'},
{key:'1', value:'SEK'},
  ]

  const data =[
{key:'2', value:'CAD'},
{key:'3', value:'RWF'},
{key:'4', value:'YUAN'},
  ]
  const card =[
{key:'2', value:'credit card'},
  ]
  return (
    <View style={styles.container}>
      <View>
        <View style={{display:'flex',flexDirection:'row',flexWrap:'wrap',padding:20,paddingTop:50,backgroundColor:'#202325'}} >
          <Icon name='arrow-left' type='material-community' color='#f9be02' size={25} /> 
        <Pressable  onPress={()=>navigation.navigate('')}>
        <Text style={{color:'white',fontSize:20,marginHorizontal:20,fontWeight:'600'}} >United State</Text>
        </Pressable>
        </View>
        <View style={{backgroundColor:'rgb(64,65,66)',margin:40,borderRadius:10,padding:20}}>
          <Text style={{color:'white',margin:5}}>you pay</Text>
      
          <TextInput right={<TextInput.Icon icon="chevron-down" color="#f9be02"/>} label=''  mode='outlined' underlineColor='#f9be02' placeholder='' textColor='white' theme={{colors:{background:'black'}}} />
        {/* <SelectList 
        data={pay} 
        setSelected={setSelected} 
        boxStyles={{backgroundColor:'#1a1a1a'}}
         dropdownTextStyles={{color:'white'}}
         placeholder='ker 1,000.00'
         search={false} 
         arrowicon={<FontAwesome name="chevron-down" size={12} color={'white'} />} 
         inputStyles={{color:'white'}}
        
        
         maxHeight={100}
        /> */}
      
          
          <Text style={{color:'white',margin:5}}>Recipient gets</Text>
          
         
         
          <TextInput right={<TextInput.Icon icon="chevron-down" color="#f9be02"/>} label=''  mode='outlined' underlineColor='#f9be02' placeholder='' borderRadius='20' textColor='white' theme={{colors:{background:'black'}}} />

          {/* <SelectList 
          data={data} 
          setSelected={setSelected} 
          search={false} 
          boxStyles={{backgroundColor:'#1a1a1a'}}
          dropdownTextStyles={{color:'white'}}
          placeholder='USD'
          arrowicon={<FontAwesome name="chevron-down" size={12} color={'white'} />} 
          inputStyles={{color:'white'}}
         maxHeight={100}

          /> */}
          
          <View style={{display:'flex', flexDirection:'row',flexWrap:'wrap'}}>
            <Icon name='swap-horizontal' type='material-community' color='white' size={25} />
          <Text style={{color:'white',margin:5}}>Exchange rate: 1kr = 0,098$</Text>
          </View>
         <View style={{display:'flex', flexDirection:'row',flexWrap:'wrap'}} >
          <Icon name='percent' type='material-community' color='white' size={25} />
          <View style={{display:'flex', flexDirection:'row',flexWrap:'wrap'}} >
          <Text style={{color:'white',margin:5}}>Commussion fee:</Text>
          <Text style={{color:'green',margin:5}}>No fee</Text>
          </View>
          </View>
        </View>
        <View style={{marginLeft:40,marginRight:40}}>
        <Text style={{color:'white',margin:5}} >Payment Method</Text>
          {/* <TextInput style={{borderWidth:0.5,margin:10,borderColor:'white',borderRadius:5,}} left={<TextInput.Icon icon='cards-outline' type='material-community'/>} mode='outlined' placeholder='Debit card' underlineColor='#1a1a1a' theme={{colors:{background:'transparent'}}} placeholderTextColor={'white'}  */}
          
          <SelectList 
        data={card} 
        setSelected={setSelected} 
        boxStyles={{backgroundColor:'#1a1a1a'}}
         dropdownTextStyles={{color:'white'}}
         placeholder='Debit card'
         placehorderTextStyle='white'
         textColor='white'
         inputStyles={{color:'white'}}
         search={false} 
         arrowicon={<FontAwesome name="chevron-down" size={12} color={'white'} />} 
         maxHeight={100}
        left={
          <TextInput.Icon 
            icon={'magnify'}
            color={'white'}
          />
        }
        />
          
        </View>
        <View style={{marginLeft:40,marginRight:40}} >
          <Text style={{textAlign:'center',backgroundColor:'#f9be02',margin:10,fontSize:20,fontWeight:'500',padding:10,borderRadius:8}}>Select Recipient</Text>
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
