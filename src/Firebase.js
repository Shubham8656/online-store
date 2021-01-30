// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import React from 'react';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCJVJ8u0FDo5ENTqbcB4BOJTNjZRrSjyno",
    authDomain: "onlinestore-df8c7.firebaseapp.com",
    databaseURL: "https://onlinestore-df8c7.firebaseio.com",
    projectId: "onlinestore-df8c7",
    storageBucket: "onlinestore-df8c7.appspot.com",
    messagingSenderId: "902096645708",
    appId: "1:902096645708:web:5352f2e9cb740898f48ee9",
    measurementId: "G-SV42HMET64"
  };
 const fire = firebase.initializeApp(firebaseConfig);

 export default fire;