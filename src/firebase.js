import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDuh6gwp7mynBGZZRy4LnCi6i_BTN9JcFU",
    authDomain: "challenge-c052e.firebaseapp.com",
    databaseURL: "https://challenge-c052e.firebaseio.com",
    projectId: "challenge-c052e",
    storageBucket: "challenge-c052e.appspot.com",
    messagingSenderId: "469133929883",
    appId: "1:469133929883:web:981cc97b2f4136e73ec53e",
    measurementId: "G-60YLC9J2HY"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  export { db, auth}