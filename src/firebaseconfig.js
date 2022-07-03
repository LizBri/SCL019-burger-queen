import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDbKDs0cSx2WuwzRaiWbrATENkRwq2lhVQ",
    authDomain: "burger-queen-97262.firebaseapp.com",
    projectId: "burger-queen-97262",
    storageBucket: "burger-queen-97262.appspot.com",
    messagingSenderId: "405193924299",
    appId: "1:405193924299:web:aef1ebf02393bd320e854e",
    measurementId: "G-NRZ086VWW2"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);