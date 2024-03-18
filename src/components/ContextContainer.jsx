import React from 'react';
import { createContext,useState } from 'react';

export const ChangeModeIntoWhite= createContext();
export default function ThemeChangeModeIntoWhite({children}) {
   const[whiteMode,setwhiteMode]= useState(true)
   const HandleModeChange=()=>{
      setwhiteMode(!whiteMode)
   }
  return (
   <ChangeModeIntoWhite.Provider 
   value={{whiteMode,HandleModeChange,
  
   
   
   }}>
    {children}
   </ChangeModeIntoWhite.Provider>
  )
}