import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBvEXtdnmmDiSbcCIY7HwX-kpU7j-3T26w",
  authDomain: "e-commercedb-d5c59.firebaseapp.com",
  databaseURL: "https://e-commercedb-d5c59.firebaseio.com",
  projectId: "e-commercedb-d5c59",
  storageBucket: "e-commercedb-d5c59.appspot.com",
  messagingSenderId: "821254189408",
  appId: "1:821254189408:web:9a91286c911e9259d4ee05",
  measurementId: "G-RJS31HS485",
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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
