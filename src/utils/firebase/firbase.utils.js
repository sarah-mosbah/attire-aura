// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP8Fbs3Mj0dTT40ln8GRDCuxfcrnhdIHQ",
  authDomain: "attire-aura.firebaseapp.com",
  projectId: "attire-aura",
  storageBucket: "attire-aura.firebasestorage.app",
  messagingSenderId: "215701376403",
  appId: "1:215701376403:web:1bbc489e75c19befc6ec66",
  measurementId: "G-PXT8YV2ZVC",
};

// Initialize Firebase
 initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const db = getFirestore();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const signInAuthWithEmailAndPassword = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
 
  if(!email || !password) {
    return;
  }

  const response = await createUserWithEmailAndPassword(auth, email, password);
  if(response) {
    return response.user;
  }

  return null;

}

export const createUserDocFromAuth = async (userAuth, additionalInfo = 
  {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    try {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (e) {
      console.error("error", e);
    }
  }

  return userDocRef;
};
