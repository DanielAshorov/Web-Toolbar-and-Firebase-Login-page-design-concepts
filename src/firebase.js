import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {

  apiKey: "Enter your firebase key here",

  authDomain: "borgeroad.firebaseapp.com",

  projectId: "borgeroad",

  storageBucket: "borgeroad.appspot.com",

  messagingSenderId: "852463409066",

  appId: "Enter your app ID here",

  measurementId: "G-NMECYWLM17"

};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };