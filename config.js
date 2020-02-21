import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAPc1VjvMmxHLrfj_4unpHcx9qdcjSNDGs",
  authDomain: "moments-3beba.firebaseapp.com",
  databaseURL: "https://moments-3beba.firebaseio.com",
  projectId: "moments-3beba",
  storageBucket: "moments-3beba.appspot.com",
  messagingSenderId: "574258618082",
  appId: "1:574258618082:web:74baa0f7578159bcfd08bb",
  measurementId: "G-D5L845XWZ4"
};
// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
export const auth = app.auth();
