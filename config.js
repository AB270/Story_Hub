
import firebase from 'firebase';
require("@firebase/firestore")

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD4iECuFL0HmjxzzYeYKiouYMqnT0Wh2kU",
    authDomain: "story-hub-2c4cc.firebaseapp.com",
    databaseURL: "https://story-hub-2c4cc.firebaseio.com",
    projectId: "story-hub-2c4cc",
    storageBucket: "story-hub-2c4cc.appspot.com",
    messagingSenderId: "952239479569",
    appId: "1:952239479569:web:193f59bee1d73461d80ab0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
