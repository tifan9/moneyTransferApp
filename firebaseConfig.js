import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyB1ZYVdtlZwa-jrhsuDIUWSz9NLJgSVYgs",
  authDomain: "moneytransferapp-82c85.firebaseapp.com",
  projectId: "moneytransferapp-82c85",
  storageBucket: "moneytransferapp-82c85.appspot.com",
  messagingSenderId: "856174791514",
  appId: "1:856174791514:web:05f10b39a54e62f03bc163",
  measurementId: "G-958JNCZXHJ"
};

// Initialize Firebase

export const Firebase_Initialize = initializeApp(firebaseConfig);
export const Firebase_Auth = getAuth(Firebase_Initialize)