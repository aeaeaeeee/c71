import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBCperJLeSr1R1ssjKNBh0foxRG-ckzWEs",
    authDomain: "c71proj.firebaseapp.com",
    projectId: "c71proj",
    storageBucket: "c71proj.appspot.com",
    messagingSenderId: "1035515610581",
    appId: "1:1035515610581:web:eeec9c589ac15133d2a95c"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


