import React from 'react'
import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAqpjwO_kp1IzVzUs0XeuDp_TgFyYupD4A",
    authDomain: "react-70c6a.firebaseapp.com",
    databaseURL: "https://react-70c6a.firebaseio.com",
    projectId: "react-70c6a",
    storageBucket: "react-70c6a.appspot.com",
    messagingSenderId: "688200749587",
    appId: "1:688200749587:web:bb64959fe905f54ab5a5e6",
    measurementId: "G-1BJ39KYEHC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  export default firebase;