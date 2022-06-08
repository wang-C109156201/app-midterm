// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth/react-native';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCji1pFiRvek4iLrWd2zBFRUFhYK_khNMA",
    authDomain: "app-project-eea59.firebaseapp.com",
    projectId: "app-project-eea59",
    storageBucket: "app-project-eea59.appspot.com",
    messagingSenderId: "304199616968",
    appId: "1:304199616968:web:89843f04be934564d118fd",
    measurementId: "G-K83VEMDCLJ"
  };
  

// Initialize Firebase
const app_length = getApps().length > 0;
const app = app_length ? getApp() : initializeApp(firebaseConfig);

//REFERENCE AUTH
const auth = app_length ? getAuth(app) :
  initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });

export const login = async ({ email, password }) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  return user;
}

export const register = async ({ name, email, password }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await updateProfile(auth.currentUser, {
      displayName: name,
    })
    return user;
  } catch (e) {
    console.log('error ...')
    console.log(e)
  }
}

export const logout = () => {
  signOut(auth);
}