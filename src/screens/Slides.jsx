import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { FlatList, Image, ImageBackground, Pressable, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;


export default function Welcome({navigation}) {
    const FlatlistRef=useRef()
const [activeIndex, setActiveIndex]=useState(0);


useEffect(()=>{
    let interval=setInterval(()=>{
        if(activeIndex === carouselData.length-1){
            FlatlistRef.current.scrollToIndex({
                index: 0,
                animation:true 

            })
        }else{
            FlatlistRef.current.scrollToIndex({
                index:activeIndex + 1,
                animation:true,
            })
        }
    }, 3000);
    return()=>clearImmediate(interval)
})

const getItemLayout=(data, index)=>({
    length:width,
    offset:width  * index,
    index:index,
})
    const carouselData=[
        {
            id:'01',
            image: require('../../assets/img/slide1.png'),
            title:"Quick money transfers",
            text:"Welcome to version 3 of The Movie",
            text2:"consecteur fdljdljngldslkfnlsn"
        },
        {
            id:'02',
            image: require('../../assets/img/slide2.png'),
            title:"24/7 Support",
            text:"Lorem psim color sit amr ,version 3 of The Movie",
            text2:"consecteur pour savoir plus de film"
        },
        {
            id:'03',
            image: require('../../assets/img/slide2.png'),
            title:"Quick money transfers",
            text:"Lorem psim color sit amr , version 3 of The Movie",
            text2:"consecteur pour savoir encore de film"

        }
    ];

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        setActiveIndex(index);
    };
    
    const renderDot=()=>{
        return carouselData.map((dot, index)=>{
           if(activeIndex===index){
            return(
                <View 
                key={`dot_${index}`}
                style={{backgroundColor:'white', 
                height:8,
                width:8,
                borderRadius:20}}>
    
                </View>
            );

           }
           else{
            return(
                <View  
                key={index}
                style={{backgroundColor:'grey', 
                height:8,
                width:8,
                borderRadius:20}}>
    
                </View>
            );

           }
         

        })
       
    }

    const renderItem=({item, index})=>{
     return(
        <View key={index} style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
            <View style={{ paddingTop:190, paddingHorizontal:80}}>
            <Image source={item.image} style={{height:200, width:200,}}/>
            </View>
            
            <View>
             <Text style={{fontSize:19, color:'white', fontWeight:'bold', paddingHorizontal:69, marginTop:20}}>{item.title}</Text>
             <Text style={{color:'grey', fontSize:15, justifyContent:'center',  paddingHorizontal:50}}>{item.text}</Text>
             <Text style={{color:'grey', fontSize:15, justifyContent:'center',paddingHorizontal:70}}>{item.text2}</Text>
            </View>
        </View>
     )
    }

  return (
    <View style={styles.container}>
    
     <FlatList data={carouselData}
     ref={FlatlistRef}
     getItemLayout={getItemLayout}
      renderItem={renderItem} 
      keyExtractor={(item)=>item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
       pagingEnabled={true} 
     onScroll={handleScroll}/>
     <View style={{display: 'flex',flexDirection:'row', alignItems:'center',paddingTop:120, justifyContent:'space-around', paddingBottom:30}}>
        <Pressable>
        <Text style={{color:'gray'}}>Skip</Text>
        </Pressable>
        <View style={{flexDirection:'row', gap:6}}>{renderDot()}</View>
        <TouchableOpacity onPress={navigation.navigate('HomeScreen')}>
        <Text style={{color:'yellow'}}>Next</Text>
        </TouchableOpacity>

     </View>
    
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
  backgroundColor:'#121214',
  height:height,
  width:width
  },
});
