import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"; //This is for authentication
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"; //This is for firebase-Database

//!Link firebase to this account + make it point to the exact firebase project you want
const firebaseConfig = {
  apiKey: "AIzaSyDOkmbUCdez05-jZlb9IAI4oxw8r-aRnZo",
  authDomain: "sayad-store-db.firebaseapp.com",
  projectId: "sayad-store-db",
  storageBucket: "sayad-store-db.appspot.com",
  messagingSenderId: "982583278534",
  appId: "1:982583278534:web:c14969156e476316c610c7",
};

const firebaseApp = initializeApp(firebaseConfig);

//!Authentication
//Starting with google
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//!for database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;
};

//!Creat User with Email & Password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

//!Sign in with Email & Passwrod
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
