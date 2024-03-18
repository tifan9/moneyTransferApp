import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { FlatList, Image, ImageBackground, Pressable, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function GetStarted() {
  const carouselData = [
    {
      id: '01',
      image: require('../../assets/img/slide3.png'),
      title: "Zero Fees",
      text: "Welcome to version 3 of The Movie",
      text2: "consecteur Pour en savoir"
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={carouselData}
        renderItem={({ item }) => ( 
          <View key={item.id}>
            <Image source={item.image} style={{ height: 200, width: 230, top: 100,marginHorizontal: 80 }} />
            <View style={{paddingTop:100, }}>
              <Text style={{ fontSize: 23, color: 'white', fontWeight: 'bold', marginHorizontal: 140, marginBottom:20 }}>{item.title}</Text>
              <Text style={{ color: 'grey', fontSize: 15, justifyContent: 'center', marginHorizontal: 77,}}>{item.text}</Text>
              <Text style={{ color: 'grey', fontSize: 15, justifyContent: 'center', marginHorizontal: 94 }}>{item.text2}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id} 
      />
     
        <TouchableOpacity>
            <Text style={{backgroundColor:'#FFC300', width:270, height:50, paddingTop:15, borderRadius:10, textAlign:'center', fontWeight:'bold', marginHorizontal:50,}}>Get Started</Text>
            </TouchableOpacity>
      </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121214',
    height: height,
    width: width
  },
});
