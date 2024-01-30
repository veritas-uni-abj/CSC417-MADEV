// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-dA884t8pzwNIxCyX8lnHp85y5DB7NnA",
  authDomain: "vunapay-e5992.firebaseapp.com",
  projectId: "vunapay-e5992",
  storageBucket: "vunapay-e5992.appspot.com",
  messagingSenderId: "627947334614",
  appId: "1:627947334614:web:9fcef335d73137787dd277",
  measurementId: "G-QTQCGXRF6H"
};




// Initialize Firebase

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const  FIREBASE_DB = getFirestore(FIREBASE_APP)
