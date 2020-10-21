import * as firebase from 'firebase'
require('@firebase/firestore')
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCIqgwmmdCeXeScfg3QkA0C9CAimJnZ0Rk",
    authDomain: "storyhub-b3127.firebaseapp.com",
    databaseURL: "https://storyhub-b3127.firebaseio.com",
    projectId: "storyhub-b3127",
    storageBucket: "storyhub-b3127.appspot.com",
    messagingSenderId: "371778369679",
    appId: "1:371778369679:web:9fe40d74785dff264d18fa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()