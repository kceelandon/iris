import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAJrQsHkt7a0zzmslbjOSEC6MR3s0KWBL8",
    authDomain: "iris-ed911.firebaseapp.com",
    databaseURL: "https://iris-ed911.firebaseio.com",
    projectId: "iris-ed911",
    storageBucket: "iris-ed911.appspot.com",
    messagingSenderId: "937374646019",
    appId: "1:937374646019:web:0af5404859918f6d683336",
    measurementId: "G-STW7TKMP41"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;