// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// Get this from your Firebase Console after creating a project
const firebaseConfig = {
  apiKey: "AIzaSyDGCV97pmQEakrU9AKKJ1VWkIV2Ruxr5Cw",
  authDomain: "petly-545d9.firebaseapp.com",
  projectId: "petly-545d9",
  storageBucket: "petly-545d9.firebasestorage.app",
  messagingSenderId: "507968420910",
  appId: "1:507968420910:web:e5d0945008eccfcb29f3bf"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);