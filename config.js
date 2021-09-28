import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyDnk9UnrsYsL_5-zUkqwG6mnuUvuD16Myo",
    authDomain: "newspaperapp-cf6db.firebaseapp.com",
    databaseURL: "https://newspaperapp-cf6db-default-rtdb.firebaseio.com",
    projectId: "newspaperapp-cf6db",
    storageBucket: "newspaperapp-cf6db.appspot.com",
    messagingSenderId: "841289192193",
    appId: "1:841289192193:web:b007d5e7617a7aa7b7c100"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

