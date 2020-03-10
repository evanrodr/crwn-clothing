import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
