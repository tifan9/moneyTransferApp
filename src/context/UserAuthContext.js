import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
}from 'firebase/auth'
import { Firebase_Auth } from "../../firebaseConfig";

const auth = Firebase_Auth
const userAuthContext = createContext()
export const UserAuthContextProvider = ({children}) => {
    const [user, setUser] = useState('') 
    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (CurrentUser) =>{
            setUser(CurrentUser)
        })
        return () =>{
            unsubscribe()
        }
    },[])
    return(
            <userAuthContext.Provider value={{user,signUp,logIn,logOut}}>{children}</userAuthContext.Provider>
    )

}
export const userUserAuth = () =>{
    return useContext(userAuthContext)
}