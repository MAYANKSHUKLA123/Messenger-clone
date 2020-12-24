// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseApp =firebase.initializeApp( {
    apiKey: "AIzaSyBdIFXdYG2VjDmrd9R_6EipVn5opn7tV00",
    authDomain: "facebook-messenger-539f8.firebaseapp.com",
    databaseURL: "https://facebook-messenger-539f8.firebaseio.com",
    projectId: "facebook-messenger-539f8",
    storageBucket: "facebook-messenger-539f8.appspot.com",
    messagingSenderId: "1002239846345",
    appId: "1:1002239846345:web:98bf39b7afd8668ca06a18",
    measurementId: "G-80RTG8RNMG"
  });
  const db = firebaseApp.firestore();

  export default db;  