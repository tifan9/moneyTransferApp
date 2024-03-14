import React from 'react';
import { View, Text } from 'react-native';

export const ButtonComp = () => {
  return (
    <>
      <TouchableOpacity 
      style={[
              tw `rounded-lg bg-yellow-500 py-4 px-5 w-full flex justify-center items-center`,
            ]}>
        <Text style={[tw `font-bold`,{fontSize:18}]}>Send Money</Text>
      </TouchableOpacity>
    </>
  );
}

