import React from 'react'
import * as firebase from 'firebase'

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyA1xxjD9GRojSlHaA4VBAxcfeOAcOXr2eY",
  authDomain: "demoreact-191b5.firebaseapp.com",
  databaseURL: "https://demoreact-191b5.firebaseio.com",
  projectId: "demoreact-191b5",
  storageBucket: "demoreact-191b5.appspot.com",
  messagingSenderId: "831834079954",
  appId: "1:831834079954:web:6df8d178ae1391afeae30b",
  measurementId: "G-YZ03CHH744"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

  export default firebase;