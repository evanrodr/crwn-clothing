import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCSEs_iZmCIOVBAVwZO7aoA4HNUr1Jqi-0",
  authDomain: "crwn-db-727f6.firebaseapp.com",
  databaseURL: "https://crwn-db-727f6.firebaseio.com",
  projectId: "crwn-db-727f6",
  storageBucket: "crwn-db-727f6.appspot.com",
  messagingSenderId: "223137400167",
  appId: "1:223137400167:web:ba2379bad259e67b5d9bc2",
  measurementId: "G-QYN02YKPSX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
